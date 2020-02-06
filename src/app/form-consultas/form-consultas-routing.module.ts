import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormConsultasPage } from './form-consultas.page';

const routes: Routes = [
  {
    path: '',
    component: FormConsultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormConsultasPageRoutingModule {}
