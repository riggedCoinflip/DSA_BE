import {Document} from 'mongoose';
import { CreateAttributeRequestDto } from '../attribute/dto/create-attribute-request.dto';
export interface Hero extends Document {
  name?: string;
  age?: number;
  attribute?: CreateAttributeRequestDto;
}
