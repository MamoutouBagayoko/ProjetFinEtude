import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagedemarragePageRoutingModule } from './pagedemarrage-routing.module';

import { PagedemarragePage } from './pagedemarrage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagedemarragePageRoutingModule
  ],
  declarations: [PagedemarragePage]
})
export class PagedemarragePageModule {}
