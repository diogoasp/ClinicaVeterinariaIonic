import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormClientesPage } from './form-clientes.page';
const routes = [
    {
        path: '',
        component: FormClientesPage
    }
];
let FormClientesPageRoutingModule = class FormClientesPageRoutingModule {
};
FormClientesPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FormClientesPageRoutingModule);
export { FormClientesPageRoutingModule };
//# sourceMappingURL=form-clientes-routing.module.js.map