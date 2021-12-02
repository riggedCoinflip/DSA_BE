import {ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {CreateSingleAttributeRequestDto} from '../single-attribute/dto/create-single-attribute-request.dto';

class CreateAttributes {
  @ValidateNested()
  @Type(() => CreateSingleAttributeRequestDto)
  readonly cou?: CreateSingleAttributeRequestDto;

  @ValidateNested()
  @Type(() => CreateSingleAttributeRequestDto)
  readonly sgc?: CreateSingleAttributeRequestDto;

  @ValidateNested()
  @Type(() => CreateSingleAttributeRequestDto)
  readonly int?: CreateSingleAttributeRequestDto;

  @ValidateNested()
  @Type(() => CreateSingleAttributeRequestDto)
  readonly cha?: CreateSingleAttributeRequestDto;

  @ValidateNested()
  @Type(() => CreateSingleAttributeRequestDto)
  readonly dex?: CreateSingleAttributeRequestDto;

  @ValidateNested()
  @Type(() => CreateSingleAttributeRequestDto)
  readonly agi?: CreateSingleAttributeRequestDto;

  @ValidateNested()
  @Type(() => CreateSingleAttributeRequestDto)
  readonly con?: CreateSingleAttributeRequestDto;

  @ValidateNested()
  @Type(() => CreateSingleAttributeRequestDto)
  readonly str?: CreateSingleAttributeRequestDto;
}
export class CreateAttributeRequestDto {
  @ValidateNested()
  @Type(() => CreateAttributes)
  readonly attributes?: CreateAttributes;
}
