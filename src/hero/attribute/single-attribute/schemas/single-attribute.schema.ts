import { Schema } from "mongoose";

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
    },
  },
  {
    _id: false,
  },
);
