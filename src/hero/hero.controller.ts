import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {HeroDto} from './dto/hero.dto';
import {HeroService} from './hero.service';
import {Hero} from './interfaces/hero.interface';

@ApiTags('hero')
@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Post()
  async create(@Body() dto: HeroDto) {
    return this.heroService.create(dto);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Hero> {
    return this.heroService.findById(id);
  }

  @Get()
  async findAll(): Promise<Hero[]> {
    return this.heroService.findAll();
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() dto: HeroDto): Promise<Hero> {
    return this.heroService.updateOne(id, dto);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return this.heroService.deleteOne(id);
  }
}
