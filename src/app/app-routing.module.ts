import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'form-clientes',
    loadChildren: () => import('./pages/form-clientes/form-clientes.module').then( m => m.FormClientesPageModule)
  },
  {
    path: 'form-animais',
    loadChildren: () => import('./pages/form-animais/form-animais.module').then( m => m.FormAnimaisPageModule)
  },
  {
    path: 'form-consultas',
    loadChildren: () => import('./pages/form-consultas/form-consultas.module').then( m => m.FormConsultasPageModule)
  },
  {
    path: 'form-clientes/:id',
    loadChildren: () => import('./pages/form-clientes/form-clientes.module').then(m => m.FormClientesPageModule)
  },
  {
    path: 'form-animais/:id',
    loadChildren: () => import('./pages/form-animais/form-animais.module').then(m => m.FormAnimaisPageModule)
  },
  {
    path: 'form-consultas/:id',
    loadChildren: () => import('./pages/form-consultas/form-consultas.module').then(m => m.FormConsultasPageModule)
  },
  {
    path: 'details-cliente/:id',
    loadChildren: () => import('./pages/details-cliente/details-cliente.module').then( m => m.DetailsClientePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
