import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageConfirPage } from './message-confir.page';

const routes: Routes = [
  {
    path: '',
    component: MessageConfirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageConfirPageRoutingModule {}
