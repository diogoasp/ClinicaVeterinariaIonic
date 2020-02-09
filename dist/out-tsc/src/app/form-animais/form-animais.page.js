import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Animal } from '../models/Animal';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiAnimalService } from '../service/api-animais.service';
import { ApiClientesService } from '../service/api-clientes.service';
let FormAnimaisPage = class FormAnimaisPage {
    constructor(actRoute, router, api, apiCliente) {
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.apiCliente = apiCliente;
        this.id = 0;
        this.animal = new Animal();
        this.getAllCliente();
    }
    save() {
        if (this.id == 0) {
            this.api.create(this.animal).subscribe(data => { this.ionViewWillEnter(); });
        }
        else {
            this.api.update(this.id, this.animal).subscribe(data => { this.ionViewWillEnter(); });
        }
        this.router.navigateByUrl('/tabs/register');
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.actRoute.params.subscribe(params => {
            this.id = params['id'];
            console.log('Id de animal: ' + this.id);
        });
        if (this.id != 0) {
            this.api.get(this.id).subscribe(resultado => {
                this.animal = resultado;
            });
        }
    }
    getAllCliente() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.clientes = this.apiCliente.getAll();
        });
    }
};
FormAnimaisPage = tslib_1.__decorate([
    Component({
        selector: 'app-form-animais',
        templateUrl: './form-animais.page.html',
        styleUrls: ['./form-animais.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router,
        ApiAnimalService, ApiClientesService])
], FormAnimaisPage);
export { FormAnimaisPage };
//# sourceMappingURL=form-animais.page.js.map