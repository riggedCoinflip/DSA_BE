import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {HeroController} from './hero.controller';
import {HeroSchemaName, HeroSchema} from './schemas/hero.schema';
import {HeroService} from './hero.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: HeroSchemaName,
        useFactory: () => {
          const schema = HeroSchema;
          schema.pre('save', function () {
            console.log('Hello from pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  controllers: [HeroController],
  providers: [HeroService],
})
export class HeroModule {}
