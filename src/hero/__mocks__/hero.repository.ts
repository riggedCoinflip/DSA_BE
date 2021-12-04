import {heroStub} from '../test/stubs/hero.stub';

export const HeroRepository = jest.fn().mockReturnValue({
  findOne: jest.fn().mockResolvedValue(heroStub()),
  find: jest.fn().mockResolvedValue([heroStub()]),
  create: jest.fn().mockResolvedValue(heroStub()),
  findOneAndUpdate: jest.fn().mockResolvedValue(heroStub()),
  deleteMany: jest.fn().mockResolvedValue(true),
});
