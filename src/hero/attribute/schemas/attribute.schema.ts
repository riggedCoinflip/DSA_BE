import {Schema} from 'mongoose';
import { SingleAttributeSchema } from '../single-attribute/schemas/single-attribute.schema';

export const AttributeSchemaName = 'Attribute';

export const AttributeSchema = new Schema({
  cou: SingleAttributeSchema,
  sgc: SingleAttributeSchema,
  int: SingleAttributeSchema,
  cha: SingleAttributeSchema,
  dex: SingleAttributeSchema,
  agi: SingleAttributeSchema,
  con: SingleAttributeSchema,
  str: SingleAttributeSchema,
  total: {
    value: {
      type: Number,
    },
    ap: {
      type: Number,
    },
  },
});
