import {model, Schema} from 'mongoose';
import { HERO_NAME_MAXLENGTH } from 'src/constants/hero.constants';
import { AttributeSchema } from '../attribute/schemas/attribute.schema';
import { Hero } from '../interfaces/hero.interface';

export const HeroSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: HERO_NAME_MAXLENGTH,
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