import { Injectable } from '@nestjs/common';
import { Charakter } from './charaktere.model';

@Injectable()
export class CharaktereService {
    charaktere: Charakter[] = [];

    /*
insertCharakter(charakter: Charakter) {

    }
    */

    createOne(name: string, gewicht: number, eigenschaften_id: number) {
        const newCharakter = new Charakter(name, gewicht, eigenschaften_id);
        this.charaktere.push(newCharakter);
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
