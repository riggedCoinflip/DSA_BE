import {Test} from '@nestjs/testing';
import { CreateHeroRequestDto } from '../dto/create-hero-request.dto';
import { UpdateHeroRequestDto } from '../dto/update-hero-request.dto';
import {HeroController} from '../hero.controller';
import {HeroService} from '../hero.service';
import { Hero } from '../interfaces/hero.interface';
import { heroCreateStub, heroStub, heroUpdateStub } from './stubs/hero.stub';

jest.mock('../hero.service')

describe('HeroController', () => {
  let heroService: HeroService;
  let heroController: HeroController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [HeroController],
      providers: [HeroService],
    }).compile();

    heroService = moduleRef.get<HeroService>(HeroService);
    heroController = moduleRef.get<HeroController>(HeroController);
    jest.clearAllMocks()
  });

  describe('findById', () => {
    describe('when findById is called', () => {
      let hero: Hero

      beforeEach(async () => {
        hero = await heroController.findById(heroStub()._id)
      })

      test('then it should call heroService', () => {
        expect(heroService.findById).toBeCalledWith(heroStub()._id);
      })

      test('then it should return a hero', () => {
        expect(hero).toEqual(heroStub())
      })
    })
  })

  describe('findAll', () => {
    describe('when findAll is called', () => {
      let heroes: Hero[];

      beforeEach(async () => {
        heroes = await heroController.findAll();
      });

      test('then it should call heroService', () => {
        expect(heroService.findAll).toBeCalledWith();
      });

      test('then it should return all heroes', () => {
        expect(heroes).toEqual([heroStub()]);
      });
    });
  });

  describe('create', () => {
    describe('when create is called', () => {
      let hero: Hero;
      let createHeroRequestDto: CreateHeroRequestDto

      beforeEach(async () => {
        createHeroRequestDto = heroCreateStub()
        hero = await heroController.create(heroCreateStub());
      });

      test('then it should call heroService', () => {
        expect(heroService.create).toBeCalledWith(createHeroRequestDto);
      });

      test('then it should return the created hero', () => {
        expect(hero).toEqual(heroStub());
      });
    });
  });

  describe('updateOne', () => {
    describe('when updateOne is called', () => {
      let hero: Hero;
      let updateHeroRequestDto: UpdateHeroRequestDto;

      beforeEach(async () => {
        updateHeroRequestDto = heroUpdateStub()
        hero = await heroController.updateOne(heroStub()._id, updateHeroRequestDto);
      });

      test('then it should call heroService', () => {
        expect(heroService.updateOne).toBeCalledWith(
          heroStub()._id,
          updateHeroRequestDto,
        );
      });

      test('then it should return the updated hero', () => {
        expect(hero).toEqual(heroStub());
      });
    });
  });

  describe('deleteOne', () => {
    describe('when deleteOne is called', () => {
      let hero: Hero;

      beforeEach(async () => {
        hero = await heroController.deleteOne(heroStub()._id);
      });

      test('then it should call heroService', () => {
        expect(heroService.deleteOne).toBeCalledWith(heroStub()._id);
      });

      test('then it should return the deleted hero', () => {
        expect(hero).toEqual(heroStub());
      });
    });
  });
});
