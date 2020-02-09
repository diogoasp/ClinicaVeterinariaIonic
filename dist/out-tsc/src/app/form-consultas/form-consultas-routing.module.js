import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormConsultasPage } from './form-consultas.page';
const routes = [
    {
        path: '',
        component: FormConsultasPage
    }
];
let FormConsultasPageRoutingModule = class FormConsultasPageRoutingModule {
};
FormConsultasPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FormConsultasPageRoutingModule);
export { FormConsultasPageRoutingModule };
//# sourceMappingURL=form-consultas-routing.module.js.map