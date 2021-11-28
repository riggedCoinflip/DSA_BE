import {Document} from 'mongoose';

export interface SingleAttribute extends Document {
  value: number;
  ap: number;
}
