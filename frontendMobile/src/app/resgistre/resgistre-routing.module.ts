import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResgistrePage } from './resgistre.page';

const routes: Routes = [
  {
    path: '',
    component: ResgistrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResgistrePageRoutingModule {}
