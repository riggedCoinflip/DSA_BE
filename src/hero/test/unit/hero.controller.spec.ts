import {Test} from '@nestjs/testing';
import { CreateHeroDto } from '../../dto/create-hero.dto';
import { UpdateHeroDto } from '../../dto/update-hero.dto';
import {HeroController} from '../../hero.controller';
import {HeroService} from '../../hero.service';
import { Hero } from '../../schemas/hero.schema';
import { heroCreateStub, heroStub, heroUpdateStub } from '../stubs/hero.stub';

jest.mock('../../hero.service')

describe('HeroController', () => {
  let heroService: HeroService;
  let heroController: HeroController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [HeroController],
      providers: [HeroService],
    }).compile();

    heroService = moduleRef.get<HeroService>(HeroService);
    heroController = moduleRef.get<HeroController>(HeroController);
    jest.clearAllMocks()
  });

  describe('getHeroById', () => {
    describe('when getHeroById is called', () => {
      let hero: Hero;

      beforeEach(async () => {
        hero = await heroController.getHeroById(heroStub()._id);
      });

      test('then it should call heroService', () => {
        expect(heroService.getHeroById).toBeCalledWith(heroStub()._id);
      });

      test('then it should return a hero', () => {
        expect(hero).toEqual(heroStub());
      });
    });
  })

  describe('getHeroes', () => {
    describe('when getHeroes is called', () => {
      let heroes: Hero[];

      beforeEach(async () => {
        heroes = await heroController.getHeroes();
      });

      test('then it should call heroService', () => {
        expect(heroService.getHeroes).toBeCalledWith();
      });

      test('then it should return all heroes', () => {
        expect(heroes).toEqual([heroStub()]);
      });
    });
  });

  describe('createHero', () => {
    describe('when createHero is called', () => {
      let hero: Hero;
      let createHeroRequestDto: CreateHeroDto

      beforeEach(async () => {
        createHeroRequestDto = heroCreateStub()
        hero = await heroController.createHero(heroCreateStub());
      });

      test('then it should call heroService', () => {
        expect(heroService.createHero).toBeCalledWith(createHeroRequestDto);
      });

      test('then it should return a hero', () => {
        expect(hero).toEqual(heroStub());
      });
    });
  });

  describe('updateHero', () => {
    describe('when updateHero is called', () => {
      let hero: Hero;
      let updateHeroRequestDto: UpdateHeroDto;

      beforeEach(async () => {
        updateHeroRequestDto = heroUpdateStub()
        hero = await heroController.updateHero(heroStub()._id, updateHeroRequestDto);
      });

      test('then it should call heroService', () => {
        expect(heroService.updateHero).toBeCalledWith(
          heroStub()._id,
          updateHeroRequestDto,
        );
      });

      test('then it should return a hero', () => {
        expect(hero).toEqual(heroStub());
      });
    });
  });

  describe('deleteHero', () => {
    describe('when deleteHero is called', () => {
      let isDeleteSuccessful: boolean

      beforeEach(async () => {
        isDeleteSuccessful = await heroController.deleteHero(heroStub()._id);
      });

      test('then it should call heroService', () => {
        expect(heroService.deleteHero).toBeCalledWith(heroStub()._id);
      });

      test('then it should return null', () => {
        expect(isDeleteSuccessful).toBeNull();
      });
    });
  });
});
