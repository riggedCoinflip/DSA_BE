import {ApiProperty} from '@nestjs/swagger';
import {IsInt, IsNotEmpty, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {FetchSingleAttributeResponseDto} from '../single-attribute/fetch-single-attribute-response.dto';

export class FetchAttributeResponseDto {
  @ValidateNested()
  @Type(() => FetchSingleAttributeResponseDto)
  readonly cou: FetchSingleAttributeResponseDto;

  @ValidateNested()
  @Type(() => FetchSingleAttributeResponseDto)
  readonly sgc: FetchSingleAttributeResponseDto;

  @ValidateNested()
  @Type(() => FetchSingleAttributeResponseDto)
  readonly int: FetchSingleAttributeResponseDto;

  @ValidateNested()
  @Type(() => FetchSingleAttributeResponseDto)
  readonly cha: FetchSingleAttributeResponseDto;

  @ValidateNested()
  @Type(() => FetchSingleAttributeResponseDto)
  readonly dex: FetchSingleAttributeResponseDto;

  @ValidateNested()
  @Type(() => FetchSingleAttributeResponseDto)
  readonly agi: FetchSingleAttributeResponseDto;

  @ValidateNested()
  @Type(() => FetchSingleAttributeResponseDto)
  readonly con: FetchSingleAttributeResponseDto;

  @ValidateNested()
  @Type(() => FetchSingleAttributeResponseDto)
  readonly str: FetchSingleAttributeResponseDto;

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
