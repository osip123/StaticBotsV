import { Injectable } from '@nestjs/common';
import { sysdata } from './types/stydata.interface';

@Injectable()
export class AppService {
  getSystemData(): sysdata {
    return {
      version: "1.0.0",
      hash: "432526gfsjahjsj",
      build_num: "20.09.2024",
      sdk: "base api sdk 12.5"
    };
  }
}
