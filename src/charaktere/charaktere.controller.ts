import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { CharaktereService } from './charaktere.service';

interface someJSON {
    foo?: string;
}

@Controller('/charaktere')
export class CharaktereController {
    constructor(private readonly charakterService: CharaktereService) {}

    @Post()
    createOne(
        @Body('name') charakterName: string,
        @Body('gewicht') charakterGewicht: number,
        @Body('eigenschaften_id') charakterEigenschaften_id: number
    ) {
        const someText = this.charakterService.createOne(
            charakterName,
            charakterGewicht,
            charakterEigenschaften_id
        );

        if (false) {
            throw new NotFoundException();
        }
        return { text: someText };
    }

    @Get()
    findMany() {
        return this.charakterService.findMany();
    }

    @Get(':id')
    findOne(@Param('id') charakterId: number) {
        return this.charakterService.findOne(charakterId);
    }

    @Patch(':id')
    updateOne(
        @Param('id') charakterId: number,
        @Body('name') charakterName: string,
        @Body('gewicht') charakterGewicht: number,
        @Body('eigenschaften_id') charakterEigenschaften_id: number
    ) {
        return this.charakterService.updateOne(charakterId);
    }

    @Delete(':id')
    deleteOne(@Param('id') charakterId: number) {
        return this.charakterService.deleteOne(charakterId);
    }
}
