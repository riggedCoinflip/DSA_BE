import {Test} from '@nestjs/testing';
import {flatten} from 'flat';
import {HeroRepository} from '../hero.repository';
import {HeroService} from '../hero.service';
import {Hero} from '../schemas/hero.schema';
import {heroCreateStub, heroStub} from './stubs/hero.stub';

jest.mock('../hero.repository');

describe('HeroService', () => {
  let heroService: HeroService;
  let heroRepository: HeroRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [HeroService, HeroRepository],
    }).compile();

    heroService = moduleRef.get<HeroService>(HeroService);
    heroRepository = moduleRef.get<HeroRepository>(HeroRepository);

    jest.clearAllMocks();
  });

  describe('getHeroById', () => {
    describe('when getHeroById is called', () => {
      let hero: Hero;

      beforeEach(async () => {
        hero = await heroService.getHeroById(heroStub()._id);
      });

      test('then it should call heroRepository', () => {
        expect(heroRepository.findOne).toBeCalledWith({id: heroStub()._id});
      });

      test('then it should return a hero', () => {
        expect(hero).toEqual(heroStub());
      });
    });
  });

  describe('getHeroes', () => {
    describe('when getHeroes is called', () => {
      let heroes: Hero[];

      beforeEach(async () => {
        heroes = await heroService.getHeroes();
      });

      test('then it should call heroRepository', () => {
        expect(heroRepository.find).toBeCalledWith({});
      });

      test('then it should return a hero', () => {
        expect(heroes).toEqual([heroStub()]);
      });
    });
  });

  describe('createHero', () => {
    describe('when createHero is called', () => {
      let hero: Hero;

      beforeEach(async () => {
        hero = await heroService.createHero(heroCreateStub());
      });

      test('then it should call heroRepository', () => {
        expect(heroRepository.create).toBeCalledWith(heroCreateStub());
      });

      test('then it should return a hero', () => {
        expect(hero).toEqual(heroStub());
      });
    });
  });

  describe('updateHero', () => {
    describe('when updateHero is called', () => {
      let hero: Hero;

      beforeEach(async () => {
        hero = await heroService.updateHero(heroStub()._id, heroStub());
      });

      test('then it should call heroRepository', () => {
        expect(heroRepository.findOneAndUpdate).toBeCalledWith(
          {id: heroStub()._id},
          {$set: flatten(heroStub())},
        );
      });

      test('then it should return a hero', () => {
        expect(hero).toEqual(heroStub());
      });
    });
  });

  describe('deleteHero', () => {
    describe('when deleteHero is called', () => {
      let isDeleted: boolean;

      beforeEach(async () => {
        isDeleted = await heroService.deleteHero(heroStub()._id);
      });

      test('then it should call heroRepository', () => {
        expect(heroRepository.deleteMany).toBeCalledWith({id: heroStub()._id});
      });

      test('then it should return isDeleted', () => {
        expect(isDeleted).toEqual(true);
      });
    });
  });
});
