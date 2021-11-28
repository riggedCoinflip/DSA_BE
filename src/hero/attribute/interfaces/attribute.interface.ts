import {Document} from 'mongoose';
import { SingleAttributeDto } from '../single-attribute/dto/single-attribute.dto';

export interface Attribute extends Document {
  attributes: {
    cou: SingleAttributeDto;
    sgc: SingleAttributeDto;
    int: SingleAttributeDto;
    cha: SingleAttributeDto;
    dex: SingleAttributeDto;
    agi: SingleAttributeDto;
    con: SingleAttributeDto;
    str: SingleAttributeDto;
  };
  total: {
    value: number;
    ap: number;
  };
}
