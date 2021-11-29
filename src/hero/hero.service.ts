import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model, Types} from 'mongoose';
import { HERO_SCHEMA_NAME } from 'src/constants/hero.constants';
import {HeroDto} from './dto/hero.dto';
import {Hero} from './interfaces/hero.interface';

@Injectable()
export class HeroService {
  constructor(
    @InjectModel(HERO_SCHEMA_NAME) private readonly heroModel: Model<Hero>,
  ) {}

  async create(dto: HeroDto): Promise<Hero> {
    const createdHero = new this.heroModel(dto);
    return createdHero.save();
  }

  async findById(id: string): Promise<Hero> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException(
        'Malformed ObjectID - has to be 24 hexadecimal chars',
      );
    }

    const hero = await this.heroModel.findById(id).exec();
    if (!hero) {
      throw new NotFoundException('Could not find hero.');
    }
    return hero;
  }

  async findAll(): Promise<Hero[]> {
    return this.heroModel.find().exec();
  }

  async updateOne(id: string, data: HeroDto): Promise<Hero> {
    let hero;
    try {
      hero = await this.heroModel
        .findByIdAndUpdate(id, data, {
          new: true,
        })
        .exec();
    } catch (e) {
      throw new NotFoundException();
    }
    if (!hero) {
      throw new NotFoundException();
    }
    return hero;
  }

  async deleteOne(id: string): Promise<Hero> {
    let hero;
    try {
      hero = await this.heroModel.findByIdAndDelete(id).exec();
    } catch (e) {
      throw new NotFoundException();
    }
    if (!hero) {
      throw new NotFoundException();
    }
    return hero;
  }
}