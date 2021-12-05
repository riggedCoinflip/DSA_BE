import {getModelToken} from '@nestjs/mongoose';
import {Test} from '@nestjs/testing';
import {FilterQuery} from 'mongoose';
import {HeroRepository} from '../../hero.repository';
import {Hero, HeroDocument} from '../../schemas/hero.schema';
import {heroCreateStub, heroStub} from '../stubs/hero.stub';
import {HeroModel} from '../support/hero.model';

describe('HeroRepository', () => {
  let heroRepository: HeroRepository;

  describe('operations', () => {
    let heroModel: HeroModel;
    let heroFilterQuery: FilterQuery<HeroDocument>;

    beforeEach(async () => {
      const moduleRef = await Test.createTestingModule({
        providers: [
          HeroRepository,
          {
            provide: getModelToken(Hero.name),
            useClass: HeroModel,
          },
        ],
      }).compile();

      heroRepository = moduleRef.get<HeroRepository>(HeroRepository);
      heroModel = moduleRef.get<HeroModel>(getModelToken(Hero.name));
      heroFilterQuery = {
        _id: heroStub()._id,
      };

      jest.clearAllMocks();
    });

    describe('findOne', () => {
      describe('when findOne is called', () => {
        let hero: Hero;

        beforeEach(async () => {
          jest.spyOn(heroModel, 'findOne');
          hero = await heroRepository.findOne(heroFilterQuery);
        });

        test('then it should call the heroModel', () => {
          expect(heroModel.findOne).toHaveBeenCalledWith(heroFilterQuery, {});
        });

        test('then it should return a hero', () => {
          expect(hero).toEqual(heroStub());
        });
      });
    });

    describe('find', () => {
      describe('when find is called', () => {
        let heroes: Hero[];

        beforeEach(async () => {
          jest.spyOn(heroModel, 'find');
          heroes = await heroRepository.find(heroFilterQuery);
        });

        test('then it should call the heroModel', () => {
          expect(heroModel.find).toHaveBeenCalledWith(heroFilterQuery);
        });

        test('then it should return a hero', () => {
          expect(heroes).toEqual([heroStub()]);
        });
      });
    });

    xdescribe('create', () => {
       describe('when create is called', () => {
         let hero: Hero;

         beforeEach(async () => {
           jest.spyOn(heroModel, 'create');
           hero = await heroRepository.create(heroCreateStub());
         });

         test('then it should call the heroModel', () => {
           expect(heroModel.create).toHaveBeenCalledWith(heroCreateStub());
         });

         test('then it should return a hero', () => {
           expect(hero).toEqual(heroStub());
         });
       });
     });
     

    describe('findOneAndUpdate', () => {
      describe('when findOneAndUpdate is called', () => {
        let hero: Hero;

        beforeEach(async () => {
          jest.spyOn(heroModel, 'findOneAndUpdate');
          hero = await heroRepository.findOneAndUpdate(
            heroFilterQuery,
            heroStub(),
          );
        });

        test('then it should call the heroModel', () => {
          expect(heroModel.findOneAndUpdate).toHaveBeenCalledWith(
            heroFilterQuery,
            heroStub(),
            {"new": true}
          );
        });

        test('then it should return a hero', () => {
          expect(hero).toEqual(heroStub());
        });
      });
    });

    describe('deleteMany', () => {
      describe('when deleteMany is called', () => {
        let isDeleted: boolean;

        beforeEach(async () => {
          jest.spyOn(heroModel, 'deleteMany');
          isDeleted = await heroRepository.deleteMany(heroFilterQuery);
        });

        test('then it should call the heroModel', () => {
          expect(heroModel.deleteMany).toHaveBeenCalledWith(heroFilterQuery);
        });

        test('then it should return true', () => {
          expect(isDeleted).toBe(true);
        });
      });
    });

  });

  xdescribe('create operations', () => {
    beforeEach(async () => {
      const moduleRef = await Test.createTestingModule({
        providers: [
          HeroRepository,
          {
            provide: getModelToken(Hero.name),
            useClass: HeroModel,
          },
        ],
      }).compile();
      
      heroRepository = moduleRef.get<HeroRepository>(HeroRepository);

      jest.clearAllMocks();
    })

    xdescribe('create', () => {
      describe('when create is called', () => {
        let hero: Hero;
        let saveSpy: jest.SpyInstance;
        let constructorSpy: jest.SpyInstance;

        beforeEach(async () => {
          saveSpy = jest.spyOn(HeroModel.prototype, 'save');
          constructorSpy = jest.spyOn(HeroModel.prototype, 'constructorSpy');

          hero = await heroRepository.create(heroStub());
        });

        test('then it should call the heroModel', () => {
          expect(saveSpy).toHaveBeenCalled();
          expect(constructorSpy).toHaveBeenCalledWith(heroStub());
        });

        test('then it should return a hero', () => {
          expect(hero).toEqual(heroStub());
        });
      });
    });
  })
});
