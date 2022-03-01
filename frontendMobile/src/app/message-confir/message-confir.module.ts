import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageConfirPageRoutingModule } from './message-confir-routing.module';

import { MessageConfirPage } from './message-confir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageConfirPageRoutingModule
  ],
  declarations: [MessageConfirPage]
})
export class MessageConfirPageModule {}
