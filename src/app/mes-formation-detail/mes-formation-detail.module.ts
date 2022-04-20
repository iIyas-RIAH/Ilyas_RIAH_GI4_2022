import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesFormationDetailPageRoutingModule } from './mes-formation-detail-routing.module';

import { MesFormationDetailPage } from './mes-formation-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesFormationDetailPageRoutingModule
  ],
  declarations: [MesFormationDetailPage]
})
export class MesFormationDetailPageModule {}
