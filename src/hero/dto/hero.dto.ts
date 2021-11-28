import { AttributeDto } from "../attribute/dto/attribute.dto";

export class HeroDto {
  readonly name?: string;
  readonly age?: number;
  readonly attribute?: AttributeDto;
}
