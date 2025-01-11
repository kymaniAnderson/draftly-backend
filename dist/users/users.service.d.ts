import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class UsersService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    findAll(role?: 'CREATOR' | 'ADMIN'): Promise<{
        id: string;
        name: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        proposals: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: Prisma.JsonValue;
            templateId: string;
            userId: string;
        }[];
    } & {
        id: string;
        name: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(createUserDto: Prisma.UserCreateInput): Promise<{
        proposals: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: Prisma.JsonValue;
            templateId: string;
            userId: string;
        }[];
    } & {
        id: string;
        name: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateUserDto: Prisma.UserUpdateInput): Promise<{
        proposals: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: Prisma.JsonValue;
            templateId: string;
            userId: string;
        }[];
    } & {
        id: string;
        name: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
