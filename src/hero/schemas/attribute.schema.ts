import {Prop, raw, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

import {
  SingleAttribute,
  SingleAttributeSchema,
} from './single-attribute.schema';

export type AttributeDocument = Attribute & Document;

@Schema({_id: false})
export class Attribute {
  @Prop({
    type: SingleAttributeSchema,
    required: true,
    default: () => ({}), //uses default of subdoc
  })
  cou: SingleAttribute;

  @Prop({
    type: SingleAttributeSchema,
    required: true,
    default: () => ({}), //uses default of subdoc
  })
  sgc: SingleAttribute;

  @Prop({
    type: SingleAttributeSchema,
    required: true,
    default: () => ({}), //uses default of subdoc
  })
  int: SingleAttribute;

  @Prop({
    type: SingleAttributeSchema,
    required: true,
    default: () => ({}), //uses default of subdoc
  })
  cha: SingleAttribute;

  @Prop({
    type: SingleAttributeSchema,
    required: true,
    default: () => ({}), //uses default of subdoc
  })
  dex: SingleAttribute;

  @Prop({
    type: SingleAttributeSchema,
    required: true,
    default: () => ({}), //uses default of subdoc
  })
  agi: SingleAttribute;

  @Prop({
    type: SingleAttributeSchema,
    required: true,
    default: () => ({}), //uses default of subdoc
  })
  con: SingleAttribute;

  @Prop({
    type: SingleAttributeSchema,
    required: true,
    default: () => ({}), //uses default of subdoc
  })
  str: SingleAttribute;

  @Prop()
  totalValue: number;

  @Prop()
  totalAp: number;
}

export const AttributeSchema = SchemaFactory.createForClass(Attribute);

/*
const singleAttributeSchemaHelper = {
  type: SingleAttributeSchema,
  required: true,
  default: () => ({}), //uses default of subdoc
};

export const AttributeSchema = new Schema
    total: {
      value: {
        type: Number,
        default: function () {
          return Object.values(this.attributes)
            .map((i: SingleAttribute) => i.value)
            .reduce(add);
        },
      },
      ap: {
        type: Number,
        default: function () {
          return Object.values(this.attributes)
            .map((i: SingleAttribute) => i.ap)
            .reduce(add);
        },
      },
    },
  },
  {
    _id: false,
  },
);

const add = (a: number, b: number) => a + b;

export const AttributeModel = model<Attribute>('Attribute', AttributeSchema);
*/
