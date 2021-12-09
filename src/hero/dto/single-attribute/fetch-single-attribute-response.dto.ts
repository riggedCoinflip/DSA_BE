import {ApiProperty} from '@nestjs/swagger';
import {IsInt, IsNotEmpty, Max, Min} from 'class-validator';
import {
  SINGLE_ATTRIBUTE_VALUE_DEFAULT,
  SINGLE_ATTRIBUTE_VALUE_MAX,
  SINGLE_ATTRIBUTE_VALUE_MIN,
} from '../../constants/single-attribute.constants';

export class FetchSingleAttributeResponseDto {
  @ApiProperty({
    example: 10,
    description: 'Attribute Value',
    format: 'integer',
    required: true,
    default: SINGLE_ATTRIBUTE_VALUE_DEFAULT,
    minimum: SINGLE_ATTRIBUTE_VALUE_MIN,
    maximum: SINGLE_ATTRIBUTE_VALUE_MAX,
  })
  @IsInt()
  @IsNotEmpty()
  @Min(SINGLE_ATTRIBUTE_VALUE_MIN)
  @Max(SINGLE_ATTRIBUTE_VALUE_MAX)
  readonly value: number = SINGLE_ATTRIBUTE_VALUE_DEFAULT;

  @ApiProperty({
    example: 30,
    description: 'GENERATED. Cost of the attribute.',
    format: 'integer',
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  readonly ap: number;
}
