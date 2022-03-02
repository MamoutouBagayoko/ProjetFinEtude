import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeNotPageRoutingModule } from './demande-not-routing.module';

import { DemandeNotPage } from './demande-not.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeNotPageRoutingModule
  ],
  declarations: [DemandeNotPage]
})
export class DemandeNotPageModule {}
