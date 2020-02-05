import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAnimalService } from 'src/app/service/api-animais.service';
import { ApiClientesService } from 'src/app/service/api-clientes.service';
let RegisterPage = class RegisterPage {
    constructor(router, apiAnimal, apiCliente) {
        this.router = router;
        this.apiAnimal = apiAnimal;
        this.apiCliente = apiCliente;
        this.getAllAnimais;
        this.getAllClientes;
    }
    ngOnInit() { }
    getAllAnimais() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.animais = this.apiAnimal.getAll();
        });
    }
    addAnimal() {
        this.router.navigate(['form-animais', 0]);
    }
    editAnimal(id) {
        this.router.navigate(['form-animais', id]);
    }
    removeAnimal(id) {
        this.apiAnimal.delete(id).subscribe(data => { this.getAllAnimais(); });
    }
    getAllClientes() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.clientes = this.apiCliente.getAll();
        });
    }
    addCliente() {
        this.router.navigate(['form-clientes', 0]);
    }
    editCliente(id) {
        this.router.navigate(['form-clientes', id]);
    }
    removeCleinte(id) {
        this.apiCliente.delete(id).subscribe(data => { this.getAllClientes(); });
    }
    showListCliente() {
        //this.getAllClientes;
        let listaCliente = document.getElementById("listaCliente");
        let listaAnimal = document.getElementById("listaAnimal");
        listaCliente.hidden = false;
        listaAnimal.hidden = true;
    }
    showListAnimal() {
        //this.getAllAnimais;
        let listaCliente = document.getElementById("listaCliente");
        let listaAnimal = document.getElementById("listaAnimal");
        listaCliente.hidden = true;
        listaAnimal.hidden = false;
    }
};
RegisterPage = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: 'register.page.html',
        styleUrls: ['register.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ApiAnimalService, ApiClientesService])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map