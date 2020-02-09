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
    }
    getAllAnimais() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.animais = this.apiAnimal.getAll();
        });
    }
    ngOnInit() { }
    addAnimal() {
        this.router.navigate(['form-animais', 0]);
    }
    editAnimal(id) {
        this.router.navigate(['form-animais', id]);
    }
    removeAnimal(id) {
        this.apiAnimal.delete(id).subscribe(data => { this.getAllAnimais(); });
    }
    //mostra os detalhes de animal ao clicar
    showDetailsAnimal(id) {
        this.apiAnimal.get(id);
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
        this.getAllClientes();
        let listaCliente = document.getElementById("listaCliente");
        let listaAnimal = document.getElementById("listaAnimal");
        listaCliente.hidden = false;
        listaAnimal.hidden = true;
    }
    showListAnimal() {
        this.getAllAnimais();
        this.putIcon();
        let listaCliente = document.getElementById("listaCliente");
        let listaAnimal = document.getElementById("listaAnimal");
        listaCliente.hidden = true;
        listaAnimal.hidden = false;
    }
    putIcon() {
        this.animais.forEach(a => {
            let element = Array.from(document.getElementsByClassName("animalIco"));
            element.forEach(e => {
                var txt = a.especie;
                console.log("Espécie: " + txt);
                var img;
                if (txt == "Canino")
                    img = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Creative-Tail-Animal-dog.svg/1024px-Creative-Tail-Animal-dog.svg.png";
                if (txt == "Felino")
                    img = "http://www.iconsalot.com/asset/icons/pixel-perfect/animals/512/cat-icon.png";
                if (txt == "Equino")
                    img = "https://gilletteveterinarian.com/wp-content/uploads/2016/03/Horse-Icon.png";
                if (txt == "Roedor")
                    img = "http://www.iconsalot.com/asset/icons/freepik/pet-shop-17/128/014-hamster-icon.png";
                if (txt == "Ave")
                    img = "http://www.iconsalot.com/asset/icons/freepik/pet-shop-17/512/022-bird-icon.png";
                if (txt == "Bovino")
                    img = "https://gilletteveterinarian.com/wp-content/uploads/2016/03/Cow-Icon.png";
                //a.= img;
            });
        });
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