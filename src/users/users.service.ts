import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(role?: 'CREATOR' | 'ADMIN') {
    if (role) {
      return this.databaseService.user.findMany({
        where: {
          role,
        },
      });
    }
    return this.databaseService.user.findMany();
  }

  async findOne(id: string) {
    const user = this.databaseService.user.findUnique({
      where: {
        authKey: id,
      },
      include: {
        proposals: true,
      },
    });
    if (!user) throw new NotFoundException();
    return user;
  }

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: {
        ...createUserDto,
        proposals: undefined,
        updatedAt: new Date(),
      },
      include: {
        proposals: true,
      },
    });
  }

  async update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: {
        id,
      },
      data: {
        ...updateUserDto,
        proposals: {
          create: updateUserDto.proposals
            ? ({ create: updateUserDto.proposals } as any)
            : undefined,
        },
      },
      include: {
        proposals: true,
      },
    });
  }

  async remove(id: string) {
    const { count } = await this.databaseService.proposal.deleteMany({
      where: {
        userId: id,
      },
    });
    console.log(`deleted: ${count}`);
    return this.databaseService.user.delete({
      where: {
        id,
      },
    });
  }
}
