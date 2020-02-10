import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormConsultasPageRoutingModule } from './form-consultas-routing.module';

import { FormConsultasPage } from './form-consultas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormConsultasPageRoutingModule
  ],
  declarations: [FormConsultasPage]
})
export class FormConsultasPageModule {}
