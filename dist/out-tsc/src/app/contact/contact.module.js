import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactPageRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';
let ContactPageModule = class ContactPageModule {
};
ContactPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ContactPageRoutingModule
        ],
        declarations: [ContactPage]
    })
], ContactPageModule);
export { ContactPageModule };
//# sourceMappingURL=contact.module.js.map