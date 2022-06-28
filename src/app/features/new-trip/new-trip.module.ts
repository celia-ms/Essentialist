import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { OwlModule } from 'ngx-owl-carousel';
import { NewTripPage } from './pages/new-trip/new-trip.page';
import { NewTripRoutingModule } from './new-trip-routing.module';
import { FormTripComponent } from './components/form-trip/form-trip.component';
import { SaveTripComponent } from './components/save-trip/save-trip.component';

@NgModule({
  declarations: [NewTripPage, FormTripComponent, SaveTripComponent],
  imports: [NewTripRoutingModule, SharedModule, OwlModule],
})
export class NewTripModule {}
