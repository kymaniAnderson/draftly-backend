import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class ProposalsService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: Prisma.JsonValue;
        templateId: string;
        userId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: Prisma.JsonValue;
        templateId: string;
        userId: string;
    }>;
    create(createProposalDto: Prisma.ProposalCreateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: Prisma.JsonValue;
        templateId: string;
        userId: string;
    }>;
    update(id: string, updateProposalDto: Prisma.ProposalUpdateInput): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        hashtags: string[];
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: Prisma.JsonValue;
        templateId: string;
        userId: string;
    }>;
}
