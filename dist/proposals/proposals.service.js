"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposalsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const database_service_1 = require("../database/database.service");
const openai_1 = require("openai");
let ProposalsService = class ProposalsService {
    constructor(databaseService, configService) {
        this.databaseService = databaseService;
        this.configService = configService;
        this.openai = new openai_1.default({
            apiKey: this.configService.get('OPENAI_API_KEY'),
        });
    }
    async findAll() {
        return this.databaseService.proposal.findMany();
    }
    async findOne(id) {
        return this.databaseService.proposal.findUnique({
            where: {
                id,
            },
        });
    }
    async create(createProposalDto) {
        const { content, ...createProposalData } = createProposalDto;
        const template = await this.databaseService.template.findUnique({
            where: { id: createProposalData.templateId },
            include: { sections: true },
        });
        if (!template)
            throw new Error('Template ID not found');
        const prompt = `
    You are a professional proposal writer. Based on the following template structure, create a detailed proposal:
    Proposal Name: ${template.name}
    Hashtags: ${template.hashtags.join(', ')}
    Sections:
    ${template.sections
            .map((section) => `Section: ${section.title}\nDescription: ${section.description}`)
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
        const proposalContent = this.parseSectionContent(response.choices[0].message.content);
        return this.databaseService.proposal.create({
            data: {
                content: proposalContent,
                ...createProposalData,
            },
        });
    }
    async update(id, updateProposalDto) {
        return this.databaseService.template.update({
            where: {
                id,
            },
            data: updateProposalDto,
        });
    }
    async remove(id) {
        return this.databaseService.proposal.delete({
            where: {
                id,
            },
        });
    }
    parseSectionContent(content) {
        const sections = content.match(/### Title: (.*?)\s+### Content:\s*([\s\S]*?)(?=(### Title:|$))/g);
        if (!sections)
            return null;
        return sections
            .map((section) => {
            const match = section.match(/### Title: (.*?)\s+### Content:\s*([\s\S]*?)(?=(### Title:|$))/s);
            if (match) {
                const [, title, body] = match;
                return {
                    title: title.trim(),
                    content: body.trim(),
                };
            }
            else
                return null;
        })
            .filter(Boolean);
    }
};
exports.ProposalsService = ProposalsService;
exports.ProposalsService = ProposalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        config_1.ConfigService])
], ProposalsService);
//# sourceMappingURL=proposals.service.js.map