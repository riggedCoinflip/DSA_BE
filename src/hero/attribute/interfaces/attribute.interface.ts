import {Document} from 'mongoose';
import { CreateSingleAttributeRequestDto } from '../single-attribute/dto/create-single-attribute-request.dto';

export interface Attribute extends Document {
  attributes: {
    cou: CreateSingleAttributeRequestDto;
    sgc: CreateSingleAttributeRequestDto;
    int: CreateSingleAttributeRequestDto;
    cha: CreateSingleAttributeRequestDto;
    dex: CreateSingleAttributeRequestDto;
    agi: CreateSingleAttributeRequestDto;
    con: CreateSingleAttributeRequestDto;
    str: CreateSingleAttributeRequestDto;
  };
  total: {
    value: number;
    ap: number;
  };
}
