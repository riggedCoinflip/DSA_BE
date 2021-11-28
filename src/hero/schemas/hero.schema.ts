import {model, Schema} from 'mongoose';
import { AttributeSchema } from '../attribute/schemas/attribute.schema';
import { Hero } from '../interfaces/hero.interface';

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
    attribute: AttributeSchema
  },
  {
    timestamps: true,
  },
);

export const HeroModel = model<Hero>('Hero', HeroSchema);