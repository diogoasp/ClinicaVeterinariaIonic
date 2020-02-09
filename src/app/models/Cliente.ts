export class Cliente{
    id : number;
    nome : string;
    cpf : string;
    telefone : string;
    email : string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}