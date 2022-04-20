import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormationDetailPageRoutingModule } from './formation-detail-routing.module';

import { FormationDetailPage } from './formation-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormationDetailPageRoutingModule
  ],
  declarations: [FormationDetailPage]
})
export class FormationDetailPageModule {}
