import { Injectable } from '@nestjs/common';
import { CreateGetDatumDto } from './dto/create-get-datum.dto';
import { UpdateGetDatumDto } from './dto/update-get-datum.dto';
import writeTxtFile from './midlware';
import { TicketData } from 'data/Ticketdata';

@Injectable()
export class GetDataService {
  dataToTxt(){
    let text: string = writeTxtFile(TicketData)
    return text
  }
}
