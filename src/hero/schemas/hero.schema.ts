import {model, Schema} from 'mongoose';
import {AttributeSchema} from '../attribute/schemas/attribute.schema';
import { HERO_NAME_MAXLENGTH } from '../constants/hero.constants';
import {Hero} from '../interfaces/hero.interface';

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
    attribute: AttributeSchema,
  },
  {
    timestamps: true,
  },
);

export const HeroModel = model<Hero>('Hero', HeroSchema);
