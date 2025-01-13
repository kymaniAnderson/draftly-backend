import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TemplatesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    return this.databaseService.template.findMany({
      include: { sections: true },
    });
  }

  async findOne(id: string) {
    return this.databaseService.template.findUnique({
      where: {
        id,
      },
      include: { sections: true },
    });
  }

  async create(createTemplateDto: Prisma.TemplateCreateInput) {
    return this.databaseService.template.create({
      data: {
        ...createTemplateDto,
        sections: {
          create: createTemplateDto.sections as any,
        },
      },
      include: {
        sections: true,
      },
    });
  }

  async update(id: string, updateTemplateDto: Prisma.TemplateUpdateInput) {
    return this.databaseService.template.update({
      where: {
        id,
      },
      data: {
        ...updateTemplateDto,
        sections: {
          create: updateTemplateDto.sections as any,
        },
      },
      include: {
        sections: true,
      },
    });
  }

  async remove(id: string) {
    return this.databaseService.template.delete({
      where: {
        id,
      },
    });
  }
}
