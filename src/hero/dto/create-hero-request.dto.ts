import {CreateAttributeRequestDto} from '../attribute/dto/create-attribute-request.dto';
import {ApiProperty} from '@nestjs/swagger';
import {IsInt, IsString, MaxLength, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {HERO_NAME_MAXLENGTH} from '../constants/hero.constants';

export class CreateHeroRequestDto {
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

  @ValidateNested()
  @Type(() => CreateAttributeRequestDto)
  readonly attribute?: CreateAttributeRequestDto;
}
