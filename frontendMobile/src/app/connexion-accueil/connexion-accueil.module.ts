import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnexionAccueilPageRoutingModule } from './connexion-accueil-routing.module';

import { ConnexionAccueilPage } from './connexion-accueil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionAccueilPageRoutingModule
  ],
  declarations: [ConnexionAccueilPage]
})
export class ConnexionAccueilPageModule {}
