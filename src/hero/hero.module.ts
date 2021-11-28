import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {HeroController} from './hero.controller';
import {HeroSchemaName, HeroSchema} from './schemas/hero.schema';
import {HeroService} from './hero.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: HeroSchemaName, schema: HeroSchema}]),
  ],
  controllers: [HeroController],
  providers: [HeroService],
})
export class HeroModule {}
