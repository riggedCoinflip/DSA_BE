import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AttributesController } from './attribute.controller';
import { AttributesService } from './attribute.service';

@Module({
    imports: [PrismaModule],
    controllers: [AttributesController],
    providers: [AttributesService],
})
export class AttributeModule {}
