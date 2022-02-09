import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResgistrePageRoutingModule } from './resgistre-routing.module';

import { ResgistrePage } from './resgistre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResgistrePageRoutingModule
  ],
  declarations: [ResgistrePage]
})
export class ResgistrePageModule {}
