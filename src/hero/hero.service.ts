import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {flatten} from 'flat';
import {CreateHeroDto} from './dto/create-hero.dto';
import { UpdateHeroRequestDto } from './dto/update-hero.dto';
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

  async createUser(heroUpdate: CreateHeroDto): Promise<Hero> {
    return this.heroRepository.create(heroUpdate);
  }

  async updateHero(id: string, heroUpdate: UpdateHeroRequestDto): Promise<Hero> {
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

  async deleteOne(id: string): Promise<boolean> {
    let isDeleted;
    try {
      isDeleted = await this.heroRepository.deleteOne({id});
    } catch (e) {
      throw new NotFoundException();
    }
    if (!isDeleted) {
      throw new NotFoundException();
    }
    return isDeleted;
  }
}
