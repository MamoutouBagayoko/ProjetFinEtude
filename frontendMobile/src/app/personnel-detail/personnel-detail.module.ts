import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnelDetailPageRoutingModule } from './personnel-detail-routing.module';

import { PersonnelDetailPage } from './personnel-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnelDetailPageRoutingModule
  ],
  declarations: [PersonnelDetailPage]
})
export class PersonnelDetailPageModule {}
