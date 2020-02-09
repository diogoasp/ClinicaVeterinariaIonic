import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Consulta } from '../models/Consulta';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiConsultasService } from '../service/api-consultas.service';
import { ApiAnimalService } from '../service/api-animais.service';
import { Animal } from '../models/Animal';
import { TypeAnimal } from '../models/TypeAnimal';
let FormConsultasPage = class FormConsultasPage {
    constructor(actRoute, router, api, apiAnimal) {
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.apiAnimal = apiAnimal;
        this.id = 0;
        this.consulta = new Consulta();
        this.animal = new Animal();
        this.getAllAnimais();
    }
    save() {
        if (this.id == 0) {
            this.api.create(this.consulta).subscribe(data => { this.ionViewWillEnter(); });
        }
        else {
            this.api.update(this.id, this.consulta).subscribe(data => { this.ionViewWillEnter(); });
        }
        this.router.navigateByUrl('/tabs/consultation');
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.actRoute.params.subscribe(params => {
            this.id = params['id'];
            console.log('Id de consulta: ' + this.id);
        });
        if (this.id != 0) {
            this.api.get(this.id).subscribe(resultado => {
                this.consulta = resultado;
            });
        }
    }
    getAllAnimais() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.animais = this.apiAnimal.getAll();
        });
    }
    setAnimal() {
        console.log(this.animal.nome);
        this.consulta.animal = new TypeAnimal(this.animal.nome, this.animal.id);
    }
};
FormConsultasPage = tslib_1.__decorate([
    Component({
        selector: 'app-form-consultas',
        templateUrl: './form-consultas.page.html',
        styleUrls: ['./form-consultas.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router,
        ApiConsultasService, ApiAnimalService])
], FormConsultasPage);
export { FormConsultasPage };
//# sourceMappingURL=form-consultas.page.js.map