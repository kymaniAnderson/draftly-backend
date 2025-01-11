import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { TemplatesModule } from './templates/templates.module';
import { ProposalsModule } from './proposals/proposals.module';

@Module({
  imports: [UsersModule, DatabaseModule, TemplatesModule, ProposalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
