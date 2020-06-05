import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarListPageRoutingModule } from './car-list-routing.module';

import { CarListPage } from './car-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarListPageRoutingModule
  ],
  declarations: [CarListPage]
})
export class CarListPageModule {}
