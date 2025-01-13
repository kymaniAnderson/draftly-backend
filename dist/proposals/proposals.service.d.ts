import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class ProposalsService {
    private readonly databaseService;
    private readonly configService;
    private readonly openai;
    constructor(databaseService: DatabaseService, configService: ConfigService);
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
    parseSectionContent(content: string): {
        title: string;
        content: string;
    }[];
}
