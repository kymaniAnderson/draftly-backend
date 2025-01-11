import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    delete(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
