import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AboutPageRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';
let AboutPageModule = class AboutPageModule {
};
AboutPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AboutPageRoutingModule
        ],
        declarations: [AboutPage]
    })
], AboutPageModule);
export { AboutPageModule };
//# sourceMappingURL=about.module.js.map