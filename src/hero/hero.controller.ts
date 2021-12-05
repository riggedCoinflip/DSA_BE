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
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
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
import {FetchHeroDto} from './dto/fetch-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
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
    type: FetchHeroDto,
    description: 'searched hero',
  })
  @ApiNotFoundResponse({description: HERO_ID_NOT_FOUND})
  async getHeroById(@Param('id') id: string): Promise<Hero> {
    return this.heroService.getHeroById(id);
  }

  @Get()
  @ApiOperation({summary: 'Request a list of all heros'})
  @ApiOkResponse({
    type: FetchHeroDto,
    isArray: true,
    description: 'List of all heroes',
  })
  async getHeroes(): Promise<Hero[]> {
    return this.heroService.getHeroes();
  }

  @Post()
  @ApiOperation({summary: 'Create a hero'})
  @ApiCreatedResponse({
    type: FetchHeroDto,
    description: 'created hero',
  })
  async createHero(@Body() dto: CreateHeroDto) {
    return this.heroService.createHero(dto);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Update the hero with the corresponding ID'})
  @ApiParam(FETCH_HERO_PARAM_ID)
  @ApiOkResponse({
    type: FetchHeroDto,
    description: 'updated hero',
  })
  @ApiNotFoundResponse({description: HERO_ID_NOT_FOUND})
  async updateHero(
    @Param('id') id: string,
    @Body() dto: UpdateHeroDto,
  ): Promise<Hero> {
    return this.heroService.updateHero(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({summary: 'Delete the hero with the corresponding ID'})
  @ApiParam(FETCH_HERO_PARAM_ID)
  @ApiNoContentResponse()
  @ApiNotFoundResponse({description: HERO_ID_NOT_FOUND})
  async deleteHero(@Param('id') id: string) {
    return this.heroService.deleteHero(id);
  }
}
