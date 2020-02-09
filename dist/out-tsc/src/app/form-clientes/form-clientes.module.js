import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormClientesPageRoutingModule } from './form-clientes-routing.module';
import { FormClientesPage } from './form-clientes.page';
let FormClientesPageModule = class FormClientesPageModule {
};
FormClientesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FormClientesPageRoutingModule
        ],
        declarations: [FormClientesPage]
    })
], FormClientesPageModule);
export { FormClientesPageModule };
//# sourceMappingURL=form-clientes.module.js.map