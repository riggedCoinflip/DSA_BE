import {heroStub} from "../test/stubs/hero.stub";

export const HeroService = jest.fn().mockReturnValue({
  getHeroById: jest.fn().mockResolvedValue(heroStub()),
  getHeroes: jest.fn().mockResolvedValue([heroStub()]),
  createHero: jest.fn().mockResolvedValue(heroStub()),
  updateHero: jest.fn().mockResolvedValue(heroStub()),
  deleteHero: jest.fn().mockResolvedValue(null),
});