export class Animal{
    id : number;
    nome : String;
    raca : String;
    especie : String;
    sexo : String;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}