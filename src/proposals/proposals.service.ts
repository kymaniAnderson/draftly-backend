import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import OpenAI from 'openai';

@Injectable()
export class ProposalsService {
  private readonly openai: OpenAI;

  constructor(
    private readonly databaseService: DatabaseService,
    private readonly configService: ConfigService,
  ) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

  async findAll() {
    return this.databaseService.proposal.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.proposal.findUnique({
      where: {
        id,
      },
    });
  }

  async create(createProposalDto: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { content, ...createProposalData } = createProposalDto;
    const template = await this.databaseService.template.findUnique({
      where: { id: createProposalData.templateId },
      include: { sections: true },
    });
    if (!template) throw new Error('Template ID not found');

    const prompt = `
    You are a professional proposal writer. Based on the following template structure, create a detailed proposal:
    Proposal Name: ${template.name}
    Hashtags: ${template.hashtags.join(', ')}
    Sections:
    ${template.sections
      .map(
        (section) =>
          `Section: ${section.title}\nDescription: ${section.description}`,
      )
      .join('\n\n')}
    User Additional Context: ${createProposalDto.userContext}

    Write an engaging and comprehensive proposal based on this structure. Generate only the content for the sections and their titles.
    Format each section with a title and content like this:
    ### Title: [Section Title]
    ### Content: [Section Content]
    Use clear, concise language and ensure that the proposal sounds professional and persuasive.`;

    const response = await this.openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
    });
    const proposalContent = this.parseSectionContent(
      response.choices[0].message.content,
    );
    return this.databaseService.proposal.create({
      data: {
        content: proposalContent,
        ...createProposalData,
      },
    });
  }

  async update(id: string, updateProposalDto: Prisma.ProposalUpdateInput) {
    return this.databaseService.template.update({
      where: {
        id,
      },
      data: updateProposalDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.proposal.delete({
      where: {
        id,
      },
    });
  }

  parseSectionContent(content: string) {
    const sections = content.match(
      /### Title: (.*?)\s+### Content:\s*([\s\S]*?)(?=(### Title:|$))/g,
    );
    if (!sections) return null;

    return sections
      .map((section) => {
        const match = section.match(
          /### Title: (.*?)\s+### Content:\s*([\s\S]*?)(?=(### Title:|$))/s,
        );
        if (match) {
          const [, title, body] = match;
          return {
            title: title.trim(),
            content: body.trim(),
          };
        } else return null;
      })
      .filter(Boolean);
  }
}
