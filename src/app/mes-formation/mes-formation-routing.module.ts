import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesFormationPage } from './mes-formation.page';

const routes: Routes = [
  {
    path: '',
    component: MesFormationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesFormationPageRoutingModule {}
