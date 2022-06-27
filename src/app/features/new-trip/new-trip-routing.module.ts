import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTripPage } from './pages/new-trip/new-trip.page';

const routes: Routes = [
  {
    path: '',
    component: NewTripPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTripRoutingModule {}
