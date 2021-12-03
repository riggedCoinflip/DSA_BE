import { heroStub } from "../test/stubs/hero.stub";

export const HeroService = jest.fn().mockReturnValue({
  findById: jest.fn().mockResolvedValue(heroStub()),
  findAll: jest.fn().mockResolvedValue([heroStub()]),
  create: jest.fn().mockResolvedValue(heroStub()),
  updateOne: jest.fn().mockResolvedValue(heroStub()),
  deleteOne: jest.fn().mockResolvedValue(heroStub()),
});