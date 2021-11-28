import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model, Types} from 'mongoose';
import {HeroDto} from './dto/hero.dto';
import {Hero} from './interfaces/hero.interface';
import {HeroSchemaName} from './schemas/hero.schema';

@Injectable()
export class HeroService {
  constructor(
    @InjectModel(HeroSchemaName) private readonly heroModel: Model<Hero>,
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

  async updateOne(id: string, dto: HeroDto): Promise<Hero> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException(
        'Malformed ObjectID - has to be 24 hexadecimal chars',
      );
    }
    const hero = await this.heroModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    if (!hero) {
      throw new NotFoundException('Could not find hero.');
    }
    return hero;
  }

  async deleteOne(id: string): Promise<Hero> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException(
        'Malformed ObjectID - has to be 24 hexadecimal chars',
      );
    }
    const hero = await this.heroModel.findByIdAndDelete(id);
    if (!hero) {
      throw new NotFoundException('Could not find hero.xxx');
    }
    return hero;
  }
}
