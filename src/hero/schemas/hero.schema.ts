import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose'
import { Attribute, AttributeSchema } from "./attribute.schema";

export type HeroDocument = Hero & Document;

@Schema()
export class Hero {
  @Prop()
  name: String;

  @Prop()
  age: number;

  @Prop({type: AttributeSchema})
  attribute: Attribute;
}

const schema = SchemaFactory.createForClass(Hero);

/*
schema.pre<HeroDocument>('findOneAndUpdate', async function (next) {
  console.log('Updating Hero');
  //const docToUpdate = await this.model.findOne(this.getQuery());
  //console.log(docToUpdate)
  next();
});
*/

export const HeroSchema = schema



/*
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


export const HeroModel = model<Hero>(HERO_SCHEMA_NAME, HeroSchema);
*/