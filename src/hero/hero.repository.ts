import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EntityRepository } from "../database/entity.repository";
import { Hero, HeroDocument } from "./schemas/hero.schema";

@Injectable()
export class HeroRepository extends EntityRepository<HeroDocument> {
  constructor(@InjectModel(Hero.name) heroModel: Model<HeroDocument>) {
    super(heroModel);
  }
}
