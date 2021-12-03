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
  ApiBadRequestResponse,
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
import {CreateHeroRequestDto} from './dto/create-hero-request.dto';
import {FetchHeroResponseDto} from './dto/fetch-hero-response.dto';
import {HeroService} from './hero.service';
import {Hero} from './interfaces/hero.interface';

@ApiTags('hero')
@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Post()
  @ApiOperation({summary: 'Create a hero'})
  @ApiCreatedResponse({
    type: FetchHeroResponseDto,
    description: 'created hero',
  })
  async create(@Body() dto: CreateHeroRequestDto) {
    return this.heroService.create(dto);
  }

  @Get()
  @ApiOperation({summary: 'Request a list of all heros'})
  @ApiOkResponse({
    type: FetchHeroResponseDto,
    isArray: true,
    description: 'List of all heroes',
  })
  async findAll(): Promise<Hero[]> {
    return this.heroService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Request the hero with the corresponding ID'})
  @ApiParam(FETCH_HERO_PARAM_ID)
  @ApiOkResponse({
    type: FetchHeroResponseDto,
    description: 'searched hero',
  })
  @ApiNotFoundResponse({description: HERO_ID_NOT_FOUND})
  async findById(@Param('id') id: string): Promise<Hero> {
    return this.heroService.findById(id);
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
    @Body() dto: CreateHeroRequestDto,
  ): Promise<Hero> {
    return this.heroService.updateOne(id, dto);
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
