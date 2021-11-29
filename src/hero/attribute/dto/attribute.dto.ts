import { ApiProperty } from '@nestjs/swagger';
import {SingleAttributeDto} from '../single-attribute/dto/single-attribute.dto';

export class AttributeDto {
  readonly attributes?: Attributes;
  readonly total?: Total;
}

class Attributes {
  readonly cou?: SingleAttributeDto;
  readonly sgc?: SingleAttributeDto;
  readonly int?: SingleAttributeDto;
  readonly cha?: SingleAttributeDto;
  readonly dex?: SingleAttributeDto;
  readonly agi?: SingleAttributeDto;
  readonly con?: SingleAttributeDto;
  readonly str?: SingleAttributeDto;
}

class Total {
  @ApiProperty({
    example: 98,
    description: 'GENERATED. Sum of all values of the 8 attributes',
    format: 'integer',
  })
  readonly value?: number;

  @ApiProperty({
    example: 450,
    description: 'GENERATED. Sum of all ap-costs of the 8 attributes',
    format: 'integer',
  })
  readonly ap?: number;
}