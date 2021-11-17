import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
    constructor(private readonly heroService: HeroService) {}

    @Post()
    createOne(
        @Body('name') heroName: string,
        @Body('gewicht') charakterGewicht: number,
        @Body('eigenschaften_id') heroEigenschaften_id: number
    ) {
        const someText = this.heroService.createOne(
            heroName,
            charakterGewicht,
            heroEigenschaften_id
        );

        if (false) {
            throw new NotFoundException();
        }
        return { text: someText };
    }

    @Get()
    findMany() {
        return this.heroService.findMany();
    }

    @Get(':id')
    findOne(@Param('id') charakterId: number) {
        return this.heroService.findOne(charakterId);
    }

    @Patch(':id')
    updateOne(
        @Param('id') charakterId: number,
        @Body('name') charakterName: string,
        @Body('gewicht') charakterGewicht: number,
        @Body('eigenschaften_id') charakterEigenschaften_id: number
    ) {
        return this.heroService.updateOne(charakterId);
    }

    @Delete(':id')
    deleteOne(@Param('id') charakterId: number) {
        return this.heroService.deleteOne(charakterId);
    }
}
