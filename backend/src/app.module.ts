import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TicketsModule } from './tickets/tickets.module';
import { ComplaintsModule } from './complaints/complaints.module';
import { GetDataModule } from './get-data/get-data.module';

@Module({
  imports: [AuthModule, TicketsModule, ComplaintsModule, GetDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
