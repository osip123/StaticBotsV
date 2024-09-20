import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Ticket } from 'data/Ticket.type';
import { TicketData } from 'data/Ticketdata';


@Injectable()
export class TicketsService {
  create(dto: CreateTicketDto) {
    let res:Ticket = {
      Name: dto.Name,
      Date: dto.Date,
      Sername: dto.Sername,
      data: dto.data,
      hash: "876556789"
    }
    return {
      status_servev: "200",
      isCreate: "TRUE"
    };
  }

  findAll() {
    return TicketData;
  }

  findOne(id: number) {
    return TicketData[id];
  }

  findByHash(hash: string){
    for(let i:number = 0; i < TicketData.length; i++ ){
      if(TicketData[i].hash === hash){
        return TicketData[i]
      }
      return{
        server_status: "404",
        data: "hash not found"
      }
    }
  }
}
