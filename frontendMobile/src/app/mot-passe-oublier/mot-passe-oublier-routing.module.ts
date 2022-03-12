import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotPasseOublierPage } from './mot-passe-oublier.page';

const routes: Routes = [
  {
    path: '',
    component: MotPasseOublierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotPasseOublierPageRoutingModule {}
