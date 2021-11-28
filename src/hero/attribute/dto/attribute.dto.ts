import {SingleAttributeDto} from '../single-attribute/dto/single-attribute.dto';

export class AttributeDto {
  readonly attributes?: {
    readonly cou?: SingleAttributeDto;
    readonly sgc?: SingleAttributeDto;
    readonly int?: SingleAttributeDto;
    readonly cha?: SingleAttributeDto;
    readonly dex?: SingleAttributeDto;
    readonly agi?: SingleAttributeDto;
    readonly con?: SingleAttributeDto;
    readonly str?: SingleAttributeDto;
  };
  readonly total?: {
    readonly value?: number;
    readonly ap?: number;
  };
}
