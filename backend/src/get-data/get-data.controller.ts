import { Controller, Get} from '@nestjs/common';
import { GetDataService } from './get-data.service';
import writeTxtFile from './midlware';


@Controller('get-data')
export class GetDataController {
  constructor(private readonly getDataService: GetDataService) {}

  @Get('/to-txt')
  dataToTxt(){
    return this.getDataService.dataToTxt();
  }

}
