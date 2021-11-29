
import {CreateSingleAttributeRequestDto} from '../single-attribute/dto/create-single-attribute-request.dto';

export class CreateAttributeRequestDto {
  readonly attributes?: CreateAttributes;
}

class CreateAttributes {
  readonly cou?: CreateSingleAttributeRequestDto;
  readonly sgc?: CreateSingleAttributeRequestDto;
  readonly int?: CreateSingleAttributeRequestDto;
  readonly cha?: CreateSingleAttributeRequestDto;
  readonly dex?: CreateSingleAttributeRequestDto;
  readonly agi?: CreateSingleAttributeRequestDto;
  readonly con?: CreateSingleAttributeRequestDto;
  readonly str?: CreateSingleAttributeRequestDto;
}

