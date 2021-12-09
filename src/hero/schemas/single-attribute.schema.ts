import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose'
import {calcApAttribute} from '@riggedcoinflip/dsa-shared';
import {
  SINGLE_ATTRIBUTE_VALUE_DEFAULT,
  SINGLE_ATTRIBUTE_VALUE_MAX,
  SINGLE_ATTRIBUTE_VALUE_MIN,
} from '../constants/single-attribute.constants';

export type SingleAttributeDocument = SingleAttribute & Document;

@Schema()
export class SingleAttribute {
  @Prop()
  value: number;

  @Prop()
  ap: number;
}

export const SingleAttributeSchema = SchemaFactory.createForClass(SingleAttribute)

/*
export const SingleAttributeSchema = new Schema(
  {
    value: {
      type: Number,
      required: true,
      default: SINGLE_ATTRIBUTE_VALUE_DEFAULT,
      min: SINGLE_ATTRIBUTE_VALUE_MIN,
      max: SINGLE_ATTRIBUTE_VALUE_MAX,
      validate: {
        validator: (v: number) => {
          return Number.isInteger(v);
        },
        message: (props: {value: number}) =>
          `${props.value} is not an integer!`,
      },
    },
    ap: {
      type: Number,
      default: function () {
        return calcApAttribute(this.value);
      },
    },
  },
  {
    _id: false,
  },
);

export const SingleAttributeModel = model<SingleAttribute>(
  'SingleAttribute',
  SingleAttributeSchema,
);

*/
