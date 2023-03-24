import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarsComponent } from './components/cars/cars.component';

const routes: Routes = [
  { path: '', component: CarsComponent },
  { path: ':id', component: CarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
