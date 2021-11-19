import {Body, Controller, Get, Injectable, Param, Post} from '@nestjs/common';
import {Prisma} from '@prisma/client';
import {CreateHeroDto} from './dto/create-hero.dto';
import {HeroService} from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Post()
  async create(@Body() d: CreateHeroDto) {
    const name = d.data.name;
    const attribute = {
      cou: d.data.attribute.cou,
      sgc: d.data.attribute.sgc,
      int: d.data.attribute.int,
      cha: d.data.attribute.cha,
      dex: d.data.attribute.dex,
      agi: d.data.attribute.agi,
      con: d.data.attribute.con,
      str: d.data.attribute.str,
    };

    const dto: Prisma.HeroCreateArgs = {
      data: {
        data: {
          name,
          attribute,
        },
      },
    };
    return await this.heroService.create(dto);
  }

  @Get()
  async findAll() {
    const dto: Prisma.HeroFindManyArgs = {
      where: {},
    };
    return await this.heroService.findMany(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const dto: Prisma.HeroFindUniqueArgs = {
      where: {id: +id},
    };
    return await this.heroService.findUnique(dto);
  }
}
