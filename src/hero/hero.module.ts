import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {HeroController} from './hero.controller';
import {HeroSchema} from './schemas/hero.schema';
import {HeroService} from './hero.service';
import {HERO_SCHEMA_NAME} from './constants/hero.constants';

@Module({
  imports: [
    MongooseModule.forFeature([{name: HERO_SCHEMA_NAME, schema: HeroSchema}]),
  ],
  controllers: [HeroController],
  providers: [HeroService],
})
export class HeroModule {}
