import { Body, Get, Injectable, Param, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HeroService {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: Prisma.HeroCreateArgs) {
        return await this.prisma.hero.create(data);
    }

    async findMany(data: Prisma.HeroFindManyArgs) {
        return await this.prisma.hero.findMany(data);
    }

    async findUnique(data: Prisma.HeroFindUniqueArgs) {
        return await this.prisma.hero.findUnique(data);
    }
}
