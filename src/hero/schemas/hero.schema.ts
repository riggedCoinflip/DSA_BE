import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {HERO_NAME_MAXLENGTH} from '../constants/hero.constants';
import {Attribute, AttributeSchema} from './attribute.schema';

export type HeroDocument = Hero & Document;

@Schema({timestamps: true})
export class Hero {
  @Prop({
    maxlength: HERO_NAME_MAXLENGTH,
    trim: true
  })
  name: String;

  @Prop()
  age: number;

  @Prop({type: AttributeSchema})
  attribute: Attribute;
}

export const HeroSchema = SchemaFactory.createForClass(Hero);

HeroSchema.pre('findOneAndUpdate', async function (next) {
  console.log('Updating Hero');
  //const docToUpdate = await this.model.findOne(this.getQuery());
  //console.log(docToUpdate)
  next()
});