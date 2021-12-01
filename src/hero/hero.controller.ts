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
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import {OBJECT_ID_BAD_REQUEST_EXCEPTION_MSG} from 'src/exceptions/constants/object-id-bad-request-exception.constants';
import {FETCH_HERO_PARAM_ID} from './constants/hero.constants';
import {CreateHeroRequestDto} from './dto/create-hero-request.dto';
import {FetchHeroResponseDto} from './dto/fetch-hero-response.dto';
import {HeroService} from './hero.service';
import {Hero} from './interfaces/hero.interface';

@ApiTags('hero')
@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Post()
  @ApiCreatedResponse({type: FetchHeroResponseDto})
  async create(@Body() dto: CreateHeroRequestDto) {
    return this.heroService.create(dto);
  }

  @Get()
  @ApiOkResponse({
    type: FetchHeroResponseDto,
    isArray: true,
    description: 'Returns all heroes',
  })
  async findAll(): Promise<Hero[]> {
    return this.heroService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({summary: 'Use the id of a hero to get that hero document'})
  @ApiParam(FETCH_HERO_PARAM_ID)
  @ApiOkResponse({
    type: FetchHeroResponseDto,
    description: 'Returns a single hero based on ID',
  })
  @ApiBadRequestResponse({description: OBJECT_ID_BAD_REQUEST_EXCEPTION_MSG})
  @ApiNotFoundResponse({description: 'Hero does not exist'})
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
