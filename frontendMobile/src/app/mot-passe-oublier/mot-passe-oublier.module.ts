import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotPasseOublierPageRoutingModule } from './mot-passe-oublier-routing.module';

import { MotPasseOublierPage } from './mot-passe-oublier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotPasseOublierPageRoutingModule
  ],
  declarations: [MotPasseOublierPage]
})
export class MotPasseOublierPageModule {}
