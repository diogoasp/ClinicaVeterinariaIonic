import { Cliente } from './Cliente';

export class Animal{
    id : number;
    nome : String;
    raca : String;
    especie : String;
    sexo : String;
    responsavel : Cliente;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}