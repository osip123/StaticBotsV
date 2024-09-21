import { PartialType } from '@nestjs/mapped-types';
import { CreateGetDatumDto } from './create-get-datum.dto';

export class UpdateGetDatumDto extends PartialType(CreateGetDatumDto) {}
