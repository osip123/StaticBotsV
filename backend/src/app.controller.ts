import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { sysdata } from './types/stydata.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSystemData(): sysdata {
    return this.appService.getSystemData();
  }
}
