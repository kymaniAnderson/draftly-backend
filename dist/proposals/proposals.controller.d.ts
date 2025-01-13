import { ProposalsService } from './proposals.service';
import { Prisma } from '@prisma/client';
export declare class ProposalsController {
    private readonly proposalsService;
    constructor(proposalsService: ProposalsService);
    findAll(): Promise<{
        id: string;
        title: string;
        userContext: string;
        content: Prisma.JsonValue[];
        templateId: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        userContext: string;
        content: Prisma.JsonValue[];
        templateId: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(createProposalDto: any): Promise<{
        id: string;
        title: string;
        userContext: string;
        content: Prisma.JsonValue[];
        templateId: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateProposalDto: Prisma.ProposalUpdateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        rating: number;
        hashtags: string[];
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        userContext: string;
        content: Prisma.JsonValue[];
        templateId: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
