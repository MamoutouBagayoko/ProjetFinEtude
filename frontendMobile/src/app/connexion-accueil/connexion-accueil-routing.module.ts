import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnexionAccueilPage } from './connexion-accueil.page';

const routes: Routes = [
  {
    path: '',
    component: ConnexionAccueilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnexionAccueilPageRoutingModule {}
