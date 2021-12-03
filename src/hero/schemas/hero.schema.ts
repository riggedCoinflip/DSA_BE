import {model, Schema} from 'mongoose';
import {AttributeSchema} from '../attribute/schemas/attribute.schema';
import {HERO_NAME_MAXLENGTH} from '../constants/hero.constants';
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

HeroSchema.pre('findOneAndUpdate', async function (next) {
  console.log('Updating Hero');
  //const docToUpdate = await this.model.findOne(this.getQuery());
  //console.log(docToUpdate)
  next()
});

export const HeroModel = model<Hero>('Hero', HeroSchema);
