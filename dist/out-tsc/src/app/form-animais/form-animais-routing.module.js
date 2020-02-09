import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormAnimaisPage } from './form-animais.page';
const routes = [
    {
        path: '',
        component: FormAnimaisPage
    }
];
let FormAnimaisPageRoutingModule = class FormAnimaisPageRoutingModule {
};
FormAnimaisPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FormAnimaisPageRoutingModule);
export { FormAnimaisPageRoutingModule };
//# sourceMappingURL=form-animais-routing.module.js.map