import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {flatten} from 'flat';
import {CreateHeroDto} from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { HeroRepository } from './hero.repository';
import { Hero } from './schemas/hero.schema';

@Injectable()
export class HeroService {
  constructor(private readonly heroRepository: HeroRepository) {}

  async getHeroById(id: string): Promise<Hero> {
    let hero;
    try {
      hero = await this.heroRepository.findOne({id});
    } catch (e) {
      throw new NotFoundException();
    }
    if (!hero) {
      throw new NotFoundException();
    }
    return hero;
  }

  async getHeroes(): Promise<Hero[]> {
    return this.heroRepository.find({});
  }

  async createHero(heroCreate: CreateHeroDto): Promise<Hero> {
    return this.heroRepository.create(heroCreate);
  }

  async updateHero(id: string, heroUpdate: UpdateHeroDto): Promise<Hero> {
    const flattenedData = flatten(heroUpdate);

    let hero;
    try {
      hero = await this.heroRepository.findOneAndUpdate(
        {id},
        {$set: flattenedData},
      );
    } catch (e) {
      throw new NotFoundException();
    }
    if (!hero) {
      throw new NotFoundException();
    }
    return hero;
  }

  async deleteHero(id: string): Promise<boolean> {
    let isDeleted: boolean;
    try {
      isDeleted = await this.heroRepository.deleteMany({id});
    } catch (e) {
      throw new NotFoundException();
    }
    if (!isDeleted) {
      throw new NotFoundException();
    }
    return null;
  }
}
