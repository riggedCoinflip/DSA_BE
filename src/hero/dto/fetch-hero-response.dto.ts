import {ApiProperty} from '@nestjs/swagger';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import {Type} from 'class-transformer';
import {FetchAttributeResponseDto} from './attribute/fetch-attribute-response.dto';
import {HERO_NAME_MAXLENGTH} from '../constants/hero.constants';

export class FetchHeroResponseDto {
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
  @Type(() => FetchAttributeResponseDto)
  readonly attribute?: FetchAttributeResponseDto;

  @ApiProperty({
    example: '1234567890abcdef12345678',
    description: 'MongoDB ObjectId',
    format: 'string',
    required: true,
    minLength: 24,
    maxLength: 24,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(24)
  @MaxLength(24)
  readonly _id: string;

  @ApiProperty({
    example: 0,
    description: 'Version',
    format: 'integer',
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  readonly __v: number;

  @ApiProperty({
    example: '2021-01-01T10:20:30.456Z',
    description: 'Timestamp of creation of document',
    format: 'Date',
    required: true,
  })
  @IsDate()
  @IsNotEmpty()
  readonly createdAt: Date;

  @ApiProperty({
    example: '2021-02-02T15:25:35.678Z',
    description: 'Timestamp of last update of document',
    format: 'Date',
    required: true,
  })
  @IsDate()
  @IsNotEmpty()
  readonly updatedAt: Date;
}
