import {Schema} from 'mongoose';

export const HeroSchemaName = 'Hero';

export const HeroSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

