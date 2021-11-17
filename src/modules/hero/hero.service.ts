import { Injectable } from '@nestjs/common';

class Charakter {
    constructor(
        public name: string,
        public gewicht: number,
        public eigenschaften_id: number
    ) {}
}

@Injectable()
export class HeroService {
    
    charaktere: Charakter[] = [];

    createOne(name: string, gewicht: number, eigenschaften_id: number) {
        const newCharakter = new Charakter(name, gewicht, eigenschaften_id);
        
        return 'wololo';
    }

    findMany() {
        const allCharaktere = [
            { name: 'A', gewicht: 1, eigenschaften_id: 2 },
            { name: 'B', gewicht: 2, eigenschaften_id: 3 },
        ];
        return allCharaktere;
    }

    findOne(id: number) {
        return { name: 'B', gewicht: 2, eigenschaften_id: 3 };
    }

    updateOne(id: number) {
        return { updated: true };
    }

    deleteOne(id: number) {
        return { deleted: true };
    }
}
