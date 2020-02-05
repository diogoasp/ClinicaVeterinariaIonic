import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsultationPage } from './consultation.page';
let ConsultationPageModule = class ConsultationPageModule {
};
ConsultationPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            RouterModule.forChild([{ path: '', component: ConsultationPage }])
        ],
        declarations: [ConsultationPage]
    })
], ConsultationPageModule);
export { ConsultationPageModule };
//# sourceMappingURL=consultation.module.js.map