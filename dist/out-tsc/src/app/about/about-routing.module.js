import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutPage } from './about.page';
const routes = [
    {
        path: '',
        component: AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AboutPageRoutingModule);
export { AboutPageRoutingModule };
//# sourceMappingURL=about-routing.module.js.map