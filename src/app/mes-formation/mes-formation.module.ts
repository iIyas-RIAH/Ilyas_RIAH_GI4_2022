import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesFormationPageRoutingModule } from './mes-formation-routing.module';

import { MesFormationPage } from './mes-formation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesFormationPageRoutingModule
  ],
  declarations: [MesFormationPage]
})
export class MesFormationPageModule {}
