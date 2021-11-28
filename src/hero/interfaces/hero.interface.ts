import {Document} from 'mongoose';
import { AttributeDto } from '../attribute/dto/attribute.dto';
export interface Hero extends Document {
  name?: string;
  age?: number;
  attribute?: AttributeDto;
}
