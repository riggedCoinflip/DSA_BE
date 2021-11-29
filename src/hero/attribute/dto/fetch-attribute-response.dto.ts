import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";
import { FetchSingleAttributeResponseDto } from "../single-attribute/dto/fetch-single-attribute-response.dto";

export class FetchAttributeResponseDto {
  readonly attributes: FetchAttributes;
  readonly total: Total;
}

class FetchAttributes {
  readonly cou: FetchSingleAttributeResponseDto;
  readonly sgc: FetchSingleAttributeResponseDto;
  readonly int: FetchSingleAttributeResponseDto;
  readonly cha: FetchSingleAttributeResponseDto;
  readonly dex: FetchSingleAttributeResponseDto;
  readonly agi: FetchSingleAttributeResponseDto;
  readonly con: FetchSingleAttributeResponseDto;
  readonly str: FetchSingleAttributeResponseDto;
}

class Total {
  @ApiProperty({
    example: 80,
    description: 'GENERATED. Sum of all values of the 8 attributes',
    format: 'integer',
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  readonly value: number;

  @ApiProperty({
    example: 240,
    description: 'GENERATED. Sum of all ap-costs of the 8 attributes',
    format: 'integer',
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  readonly ap: number;
}