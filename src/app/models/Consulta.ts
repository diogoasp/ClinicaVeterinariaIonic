export class Consulta{
    id: number;
    nomeVeterinario: String;
    sintomas: String;
    diagnostico: String;
    dtConsulta : String;
    id_animal: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
} 