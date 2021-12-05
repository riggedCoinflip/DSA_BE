import {ApiProperty} from '@nestjs/swagger';
import {IsInt, IsNotEmpty, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {FetchSingleAttributeDto} from '../single-attribute/fetch-single-attribute.dto';

export class FetchAttributeDto {
  @ValidateNested()
  @Type(() => FetchSingleAttributeDto)
  readonly cou: FetchSingleAttributeDto;

  @ValidateNested()
  @Type(() => FetchSingleAttributeDto)
  readonly sgc: FetchSingleAttributeDto;

  @ValidateNested()
  @Type(() => FetchSingleAttributeDto)
  readonly int: FetchSingleAttributeDto;

  @ValidateNested()
  @Type(() => FetchSingleAttributeDto)
  readonly cha: FetchSingleAttributeDto;

  @ValidateNested()
  @Type(() => FetchSingleAttributeDto)
  readonly dex: FetchSingleAttributeDto;

  @ValidateNested()
  @Type(() => FetchSingleAttributeDto)
  readonly agi: FetchSingleAttributeDto;

  @ValidateNested()
  @Type(() => FetchSingleAttributeDto)
  readonly con: FetchSingleAttributeDto;

  @ValidateNested()
  @Type(() => FetchSingleAttributeDto)
  readonly str: FetchSingleAttributeDto;

  @ApiProperty({
    example: 80,
    description: 'GENERATED. Sum of all values of the 8 attributes',
    format: 'integer',
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  readonly totalValue: number;

  @ApiProperty({
    example: 240,
    description: 'GENERATED. Sum of all ap-costs of the 8 attributes',
    format: 'integer',
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  readonly totalAp: number;
}
