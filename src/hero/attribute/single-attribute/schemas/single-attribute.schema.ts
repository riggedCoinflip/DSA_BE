import {calcApAttribute} from '@riggedcoinflip/dsa-shared';
import {model, Schema} from 'mongoose';
import { SingleAttribute } from '../interfaces/single-attribute.interface';

export const SingleAttributeSchema = new Schema(
  {
    value: {
      type: Number,
      required: true,
      default: 8,
      min: 8,
      max: 20,
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
