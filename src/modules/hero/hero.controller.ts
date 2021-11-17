import { Body, Controller, Get, Injectable, Param, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateHeroDto } from './dto/create-hero.dto';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
    constructor(private readonly heroService: HeroService) {}

    @Post()
    async create(@Body() data: CreateHeroDto) {
        const dto: Prisma.HeroCreateArgs = {
            data: {
                name: data.name,
                attributeId: data.attributeId,
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
            where: { id: +id },
        };
        return await this.heroService.findUnique(dto);
    }
}
