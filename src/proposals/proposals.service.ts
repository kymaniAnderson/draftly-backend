import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProposalsService {
  constructor(private readonly databaseService: DatabaseService) {}

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

  async create(createProposalDto: Prisma.ProposalCreateInput) {
    return this.databaseService.proposal.create({
      data: createProposalDto,
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
}
