import { Cliente } from './Cliente';

export class Animal{
    id: number;
    nome: string;
    raca: string;
    especie: string;
    sexo: string;
    reponsavel: Cliente;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}