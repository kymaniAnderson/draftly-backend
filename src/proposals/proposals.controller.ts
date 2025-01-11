import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProposalsService } from './proposals.service';
import { Prisma } from '@prisma/client';

@Controller('proposals')
export class ProposalsController {
  constructor(private readonly proposalsService: ProposalsService) {}

  @Get()
  findAll() {
    return this.proposalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proposalsService.findOne(id);
  }

  @Post()
  create(@Body() createProposalDto: Prisma.ProposalCreateInput) {
    return this.proposalsService.create(createProposalDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProposalDto: Prisma.ProposalUpdateInput,
  ) {
    return this.proposalsService.update(id, updateProposalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proposalsService.remove(id);
  }
}
