import {ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {CreateSingleAttributeDto} from '../single-attribute/create-single-attribute.dto';

export class CreateAttributeDto {
  @ValidateNested()
  @Type(() => CreateSingleAttributeDto)
  readonly cou?: CreateSingleAttributeDto;

  @ValidateNested()
  @Type(() => CreateSingleAttributeDto)
  readonly sgc?: CreateSingleAttributeDto;

  @ValidateNested()
  @Type(() => CreateSingleAttributeDto)
  readonly int?: CreateSingleAttributeDto;

  @ValidateNested()
  @Type(() => CreateSingleAttributeDto)
  readonly cha?: CreateSingleAttributeDto;

  @ValidateNested()
  @Type(() => CreateSingleAttributeDto)
  readonly dex?: CreateSingleAttributeDto;

  @ValidateNested()
  @Type(() => CreateSingleAttributeDto)
  readonly agi?: CreateSingleAttributeDto;

  @ValidateNested()
  @Type(() => CreateSingleAttributeDto)
  readonly con?: CreateSingleAttributeDto;

  @ValidateNested()
  @Type(() => CreateSingleAttributeDto)
  readonly str?: CreateSingleAttributeDto;
}

