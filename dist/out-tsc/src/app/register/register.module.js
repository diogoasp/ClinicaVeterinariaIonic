import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterPage } from './register.page';
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            RouterModule.forChild([{ path: '', component: RegisterPage }])
        ],
        declarations: [RegisterPage]
    })
], RegisterPageModule);
export { RegisterPageModule };
//# sourceMappingURL=register.module.js.map