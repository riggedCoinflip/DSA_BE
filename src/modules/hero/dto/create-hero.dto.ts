import {CreateAttributeDto} from '../attribute/dto/create-attribute.dto';

export class CreateHeroDto {
  data: {
    name: string;
    attribute: CreateAttributeDto;
  };
}
