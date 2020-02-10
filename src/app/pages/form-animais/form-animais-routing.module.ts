import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAnimaisPage } from './form-animais.page';

const routes: Routes = [
  {
    path: '',
    component: FormAnimaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAnimaisPageRoutingModule {}
