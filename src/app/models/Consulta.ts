import { TypeAnimal } from './TypeAnimal';

export class Consulta{
    id: number;
    nomeVeterinario: String;
    sintomas: String;
    diagnostico: String;
    dtConsulta : Date;
    animal: TypeAnimal;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
} 