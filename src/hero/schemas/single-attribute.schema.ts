import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose'
import {calcApAttribute} from '@riggedcoinflip/dsa-shared';
import {
  SINGLE_ATTRIBUTE_VALUE_DEFAULT,
  SINGLE_ATTRIBUTE_VALUE_MAX,
  SINGLE_ATTRIBUTE_VALUE_MIN,
} from '../constants/single-attribute.constants';

export type SingleAttributeDocument = SingleAttribute & Document;

@Schema({_id: false})
export class SingleAttribute {
  @Prop({
    required: true,
    default: SINGLE_ATTRIBUTE_VALUE_DEFAULT,
    min: SINGLE_ATTRIBUTE_VALUE_MIN,
    max: SINGLE_ATTRIBUTE_VALUE_MAX,
    validate: {
      validator: (v: number) => {
        return Number.isInteger(v);
      },
      message: (props: {value: number}) => `${props.value} is not an integer!`,
    },
  })
  value: number;

  @Prop()
  ap: number;
}

export const SingleAttributeSchema = SchemaFactory.createForClass(SingleAttribute)
