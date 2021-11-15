import { Module } from '@nestjs/common';
import { HeroController } from './hero.controller';
import { CharaktereService } from './hero.service';

@Module({
    imports: [],
    controllers: [HeroController],
    providers: [CharaktereService],
})
export class CharaktereModule {}
