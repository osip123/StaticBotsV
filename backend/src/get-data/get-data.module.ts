import { Module } from '@nestjs/common';
import { GetDataService } from './get-data.service';
import { GetDataController } from './get-data.controller';

@Module({
  controllers: [GetDataController],
  providers: [GetDataService],
})
export class GetDataModule {}
