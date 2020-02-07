import { Animal } from './Animal';

export class Consulta{
    id: number;
    nomeVeterinario: String;
    sintomas: String;
    diagnostico: String;
    dtConsulta : String;
    id_animal: number;
    animal: Animal;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
} 