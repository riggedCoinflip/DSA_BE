import { Module } from '@nestjs/common';
import { CharaktereController } from './charaktere.controller';
import { CharaktereService } from './charaktere.service';

@Module({
    imports: [],
    controllers: [CharaktereController],
    providers: [CharaktereService],
})
export class CharaktereModule {}
