import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormAnimaisPageRoutingModule } from './form-animais-routing.module';
import { FormAnimaisPage } from './form-animais.page';
let FormAnimaisPageModule = class FormAnimaisPageModule {
};
FormAnimaisPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FormAnimaisPageRoutingModule
        ],
        declarations: [FormAnimaisPage]
    })
], FormAnimaisPageModule);
export { FormAnimaisPageModule };
//# sourceMappingURL=form-animais.module.js.map