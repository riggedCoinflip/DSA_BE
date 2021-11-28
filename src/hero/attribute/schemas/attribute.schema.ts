import {Schema} from 'mongoose';
import {SingleAttribute} from '../single-attribute/interfaces/single-attribute.interface';
import {SingleAttributeSchema} from '../single-attribute/schemas/single-attribute.schema';

const singleAttributeSchemaHelper = {
  type: SingleAttributeSchema,
  required: true,
  default: () => ({}), //uses default of subdoc
};

export const AttributeSchema = new Schema({
  attributes: {
    cou: singleAttributeSchemaHelper,
    sgc: singleAttributeSchemaHelper,
    int: singleAttributeSchemaHelper,
    cha: singleAttributeSchemaHelper,
    dex: singleAttributeSchemaHelper,
    agi: singleAttributeSchemaHelper,
    con: singleAttributeSchemaHelper,
    str: singleAttributeSchemaHelper,
  },
  total: {
    value: {
      type: Number,
      readonly: true,
      default: function () {
        return Object.values(this.attributes)
          .map((i: SingleAttribute) => i.value)
          .reduce(add);
      },
    },
    ap: {
      type: Number,
      readonly: true,
      default: function () {
        return Object.values(this.attributes)
          .map((i: SingleAttribute) => i.ap)
          .reduce(add);
      },
    },
  },
});

const add = (a: number, b: number) => a + b;
