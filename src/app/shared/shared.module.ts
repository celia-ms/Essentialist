import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material/material.module';
import { CardTripComponent } from './components/card-trip/card-trip.component';
import { HeaderTripComponent } from './components/header-trip/header-trip.component';
import { CardAddTripComponent } from './components/card-add-trip/card-add-trip.component';
import { DialogTripComponent } from './components/dialog-trip/dialog-trip.component';

@NgModule({
  declarations: [
    CardTripComponent,
    HeaderTripComponent,
    CardAddTripComponent,
    DialogTripComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    CardTripComponent,
    HeaderTripComponent,
    CardAddTripComponent,
    DialogTripComponent,
  ],
})
export class SharedModule {}
