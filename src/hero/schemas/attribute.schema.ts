import {Prop, raw, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

import {SingleAttribute, SingleAttributeSchema} from './single-attribute.schema';

export type AttributeDocument = Attribute & Document

@Schema()
export class Attribute {
  @Prop({type: SingleAttributeSchema})
  cou: SingleAttribute;

  @Prop({type: SingleAttributeSchema})
  sgc: SingleAttribute;

  @Prop({type: SingleAttributeSchema})
  int: SingleAttribute;

  @Prop({type: SingleAttributeSchema})
  cha: SingleAttribute;

  @Prop({type: SingleAttributeSchema})
  dex: SingleAttribute;

  @Prop({type: SingleAttributeSchema})
  agi: SingleAttribute;

  @Prop({type: SingleAttributeSchema})
  con: SingleAttribute;

  @Prop({type: SingleAttributeSchema})
  str: SingleAttribute;

  @Prop()
  totalValue: number

  @Prop()
  totalAp: number
}

export const AttributeSchema = SchemaFactory.createForClass(Attribute)

/*
const singleAttributeSchemaHelper = {
  type: SingleAttributeSchema,
  required: true,
  default: () => ({}), //uses default of subdoc
};

export const AttributeSchema = new Schema(
  {
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