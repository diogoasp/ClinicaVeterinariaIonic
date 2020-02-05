import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAnimaisPageRoutingModule } from './form-animais-routing.module';

import { FormAnimaisPage } from './form-animais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAnimaisPageRoutingModule
  ],
  declarations: [FormAnimaisPage]
})
export class FormAnimaisPageModule {}
