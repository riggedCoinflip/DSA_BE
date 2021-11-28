import {Document} from 'mongoose';
import { SingleAttribute } from '../single-attribute/interfaces/single-attribute.interface';

export interface Attribute extends Document {
  cou: SingleAttribute;
  sgc: SingleAttribute;
  int: SingleAttribute;
  cha: SingleAttribute;
  dex: SingleAttribute;
  agi: SingleAttribute;
  con: SingleAttribute;
  str: SingleAttribute;
  total: {
    value: number;
    ap: number;
  };
}
