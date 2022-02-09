import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnelDetailPage } from './personnel-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PersonnelDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnelDetailPageRoutingModule {}
