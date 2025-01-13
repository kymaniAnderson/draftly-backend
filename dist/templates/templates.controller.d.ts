import { TemplatesService } from './templates.service';
import { Prisma } from '@prisma/client';
export declare class TemplatesController {
    private readonly templatesService;
    constructor(templatesService: TemplatesService);
    findAll(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        hashtags: string[];
    }[]>;
    findOne(id: string): Promise<{
        sections: {
            id: string;
            title: string;
            templateId: string;
            description: string;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        hashtags: string[];
    }>;
    create(createTemplateDto: Prisma.TemplateCreateInput): Promise<{
        sections: {
            id: string;
            title: string;
            templateId: string;
            description: string;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        hashtags: string[];
    }>;
    update(id: string, updateTemplateDto: Prisma.TemplateUpdateInput): Promise<{
        sections: {
            id: string;
            title: string;
            templateId: string;
            description: string;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        hashtags: string[];
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        hashtags: string[];
    }>;
}
