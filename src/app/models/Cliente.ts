export class Cliente{
    id : number;
    nome : String;
    cpf : String;
    telefone : String;
    email : String;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}