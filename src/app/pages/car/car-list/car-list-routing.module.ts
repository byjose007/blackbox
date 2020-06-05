import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarListPage } from './car-list.page';

const routes: Routes = [
  {
    path: '',
    component: CarListPage
  },
  {
    path: 'carForm',
    loadChildren: () => import('../car.module').then( m => m.CarPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarListPageRoutingModule {}
