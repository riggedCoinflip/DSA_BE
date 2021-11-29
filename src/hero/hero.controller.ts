import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import {CreateHeroRequestDto} from './dto/create-hero-request.dto';
import { FetchHeroResponseDto } from './dto/fetch-hero-response.dto';
import {HeroService} from './hero.service';
import {Hero} from './interfaces/hero.interface';

@ApiTags('hero')
@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Post()
  async create(@Body() dto: CreateHeroRequestDto) {
    return this.heroService.create(dto);
  }

  @Get()
  async findAll(): Promise<Hero[]> {
    return this.heroService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({type: FetchHeroResponseDto})
  async findById(@Param('id') id: string): Promise<Hero> {
    return this.heroService.findById(id);
  }

  @Patch(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() dto: CreateHeroRequestDto,
  ): Promise<Hero> {
    return this.heroService.updateOne(id, dto);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return this.heroService.deleteOne(id);
  }
}
