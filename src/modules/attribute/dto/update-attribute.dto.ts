import { PartialType } from '@nestjs/mapped-types';
import { CreateAttributeDto } from './create-attribute.dto';

export class UpdateCatDto extends PartialType(CreateAttributeDto) {}