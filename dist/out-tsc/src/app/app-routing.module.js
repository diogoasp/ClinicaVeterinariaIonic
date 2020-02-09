import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactPageModule)
    },
    {
        path: 'form-clientes',
        loadChildren: () => import('./form-clientes/form-clientes.module').then(m => m.FormClientesPageModule)
    },
    {
        path: 'form-animais',
        loadChildren: () => import('./form-animais/form-animais.module').then(m => m.FormAnimaisPageModule)
    },
    {
        path: 'form-consultas',
        loadChildren: () => import('./form-consultas/form-consultas.module').then(m => m.FormConsultasPageModule)
    },
    {
        path: 'form-clientes/:id',
        loadChildren: () => import('./form-clientes/form-clientes.module').then(m => m.FormClientesPageModule)
    },
    {
        path: 'form-animais/:id',
        loadChildren: () => import('./form-animais/form-animais.module').then(m => m.FormAnimaisPageModule)
    },
    {
        path: 'form-consultas/:id',
        loadChildren: () => import('./form-consultas/form-consultas.module').then(m => m.FormConsultasPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map