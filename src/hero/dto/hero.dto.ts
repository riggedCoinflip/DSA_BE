import {AttributeDto} from '../attribute/dto/attribute.dto';
import {ApiProperty} from '@nestjs/swagger';
import {IsInt, IsString, MaxLength} from 'class-validator';
import { HERO_NAME_MAXLENGTH } from 'src/constants/hero.constants';

export class HeroDto {
  @ApiProperty({
    example: 'Rick',
    description: 'Name of the hero',
    format: 'string',
    maxLength: HERO_NAME_MAXLENGTH,
  })
  @IsString()
  @MaxLength(HERO_NAME_MAXLENGTH)
  readonly name?: string;


  @ApiProperty({
    example: 23,
    description: 'Age of the hero',
    format: 'integer',
  })
  @IsInt()
  readonly age?: number;


  readonly attribute?: AttributeDto;
}
