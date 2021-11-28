import {Document} from 'mongoose';

export interface Hero extends Document {
  name: string;
  age: number;
}
