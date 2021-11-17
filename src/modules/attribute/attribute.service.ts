import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/modules/prisma/prisma.service";

@Injectable()
export class AttributesService {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: Prisma.AttributeCreateArgs) {
        return await this.prisma.attribute.create(data);
    }

    async findMany(data: Prisma.AttributeFindManyArgs) {
        return await this.prisma.attribute.findMany(data);
    }

    async findUnique(data: Prisma.AttributeFindUniqueArgs) {
        return await this.prisma.attribute.findUnique(data);
    }
}