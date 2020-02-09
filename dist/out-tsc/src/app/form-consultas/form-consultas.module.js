import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormConsultasPageRoutingModule } from './form-consultas-routing.module';
import { FormConsultasPage } from './form-consultas.page';
let FormConsultasPageModule = class FormConsultasPageModule {
};
FormConsultasPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FormConsultasPageRoutingModule
        ],
        declarations: [FormConsultasPage]
    })
], FormConsultasPageModule);
export { FormConsultasPageModule };
//# sourceMappingURL=form-consultas.module.js.map