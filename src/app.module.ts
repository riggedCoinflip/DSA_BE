import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharaktereModule } from './charaktere/charaktere.module';

@Module({
    imports: [ConfigModule.forRoot(), CharaktereModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
