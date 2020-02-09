import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAnimalService } from 'src/app/service/api-animais.service';
import { ApiConsultasService } from 'src/app/service/api-consultas.service';
let ConsultationPage = class ConsultationPage {
    constructor(router, apiConsulta, apiAnimal) {
        this.router = router;
        this.apiConsulta = apiConsulta;
        this.apiAnimal = apiAnimal;
        this.getAllConsultas();
    }
    ngOnInit() { }
    getAllConsultas() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.consultas = this.apiConsulta.getAll();
            this.animais = this.apiAnimal.getAll();
        });
    }
    addConsulta() {
        this.router.navigate(['form-consultas', 0]);
    }
    editConsulta(id) {
        this.router.navigate(['form-consultas', id]);
    }
    removeConsulta(id) {
        this.apiConsulta.delete(id).subscribe(data => { this.getAllConsultas(); });
    }
};
ConsultationPage = tslib_1.__decorate([
    Component({
        selector: 'app-consultation',
        templateUrl: 'consultation.page.html',
        styleUrls: ['consultation.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ApiConsultasService, ApiAnimalService])
], ConsultationPage);
export { ConsultationPage };
//# sourceMappingURL=consultation.page.js.map