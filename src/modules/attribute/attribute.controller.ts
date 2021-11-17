import { Prisma } from '.prisma/client';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AttributesService } from './attribute.service';
import { CreateAttributeDto } from './dto/create-attribute.dto';

@Controller('attribute')
export class AttributesController {
    constructor(private readonly attributeService: AttributesService) {}

    @Post()
    async create(@Body() data: CreateAttributeDto) {
        const dto: Prisma.AttributeCreateArgs = {
            data: {
                cou: data.cou,
                sgc: data.sgc,
                int: data.int,
                cha: data.cha,
                dex: data.dex,
                agi: data.agi,
                con: data.con,
                str: data.str,
            },
        };
        return await this.attributeService.create(dto);
    }

    @Get()
    async findAll() {
        const dto: Prisma.AttributeFindManyArgs = {
            where: {},
        };
        return await this.attributeService.findMany(dto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const dto: Prisma.AttributeFindUniqueArgs = {
            where: { id: +id },
        };
        return await this.attributeService.findUnique(dto);
    }
}
