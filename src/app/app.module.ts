import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {HeroModule} from 'src/modules/hero/hero.module';
import {AppController} from './app.controller';
import {AppService} from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), HeroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
