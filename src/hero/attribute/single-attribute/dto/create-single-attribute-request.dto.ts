import {ApiProperty} from '@nestjs/swagger';
import {IsInt, IsNotEmpty, Max, Min} from 'class-validator';
import {
  SINGLE_ATTRIBUTE_VALUE_DEFAULT,
  SINGLE_ATTRIBUTE_VALUE_MAX,
  SINGLE_ATTRIBUTE_VALUE_MIN,
} from 'src/constants/single-attribute.constants';

export class CreateSingleAttributeRequestDto {
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
}
