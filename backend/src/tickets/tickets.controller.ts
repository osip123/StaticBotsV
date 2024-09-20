import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post('/create')
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.create(createTicketDto);
  }

  @Get('/get-all')
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get('/by-hash/:hash')
  findByHash(@Param('hash') hash:string){
   return this.ticketsService.findByHash(hash); 
  }

  @Get('/by-id/:id')
  findOne(@Param('id') id: string) {
    return this.ticketsService.findOne(+id);
  }

}
