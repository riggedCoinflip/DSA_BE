import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {HeroController} from './hero.controller';
import {Hero, HeroSchema} from './schemas/hero.schema';
import {HeroService} from './hero.service';
import { HeroRepository } from './hero.repository';

@Module({
  imports: [MongooseModule.forFeature([{name: Hero.name, schema: HeroSchema}])],
  controllers: [HeroController],
  providers: [HeroService, HeroRepository],
})
export class HeroModule {}
