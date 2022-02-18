import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagedemarragePage } from './pagedemarrage.page';

const routes: Routes = [
  {
    path: '',
    component: PagedemarragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagedemarragePageRoutingModule {}
