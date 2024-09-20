import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TicketsModule } from './tickets/tickets.module';
import { ComplaintsModule } from './complaints/complaints.module';

@Module({
  imports: [AuthModule, TicketsModule, ComplaintsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
