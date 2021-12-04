import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import {
  FETCH_HERO_PARAM_ID,
  HERO_ID_NOT_FOUND,
} from './constants/hero.constants';
import {CreateHeroDto} from './dto/create-hero.dto';
import {FetchHeroResponseDto} from './dto/fetch-hero-response.dto';
import { UpdateHeroRequestDto } from './dto/update-hero.dto';
import {HeroService} from './hero.service';
import { Hero } from './schemas/hero.schema';

@ApiTags('hero')
@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get(':id')
  @ApiOperation({summary: 'Request the hero with the corresponding ID'})
  @ApiParam(FETCH_HERO_PARAM_ID)
  @ApiOkResponse({
    type: FetchHeroResponseDto,
    description: 'searched hero',
  })
  @ApiNotFoundResponse({description: HERO_ID_NOT_FOUND})
  async findById(@Param('id') id: string): Promise<Hero> {
    return this.heroService.getHeroById(id);
  }

  @Get()
  @ApiOperation({summary: 'Request a list of all heros'})
  @ApiOkResponse({
    type: FetchHeroResponseDto,
    isArray: true,
    description: 'List of all heroes',
  })
  async findAll(): Promise<Hero[]> {
    return this.heroService.getHeroes();
  }

  @Post()
  @ApiOperation({summary: 'Create a hero'})
  @ApiCreatedResponse({
    type: FetchHeroResponseDto,
    description: 'created hero',
  })
  async create(@Body() dto: CreateHeroDto) {
    return this.heroService.createUser(dto);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Update the hero with the corresponding ID'})
  @ApiParam(FETCH_HERO_PARAM_ID)
  @ApiOkResponse({
    type: FetchHeroResponseDto,
    description: 'updated hero',
  })
  @ApiNotFoundResponse({description: HERO_ID_NOT_FOUND})
  async updateOne(
    @Param('id') id: string,
    @Body() dto: UpdateHeroRequestDto,
  ): Promise<Hero> {
    return this.heroService.updateHero(id, dto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Delete the hero with the corresponding ID'})
  @ApiParam(FETCH_HERO_PARAM_ID)
  @ApiOkResponse({
    type: FetchHeroResponseDto,
    description: 'deleted hero',
  })
  @ApiNotFoundResponse({description: HERO_ID_NOT_FOUND})
  async deleteOne(@Param('id') id: string) {
    return this.heroService.deleteOne(id);
  }
}
