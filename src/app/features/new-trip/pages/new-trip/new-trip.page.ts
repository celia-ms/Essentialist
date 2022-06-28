import { Component, OnInit, ViewChild } from '@angular/core';
import { Trip } from 'src/app/core/models/trip';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.page.html',
  styleUrls: ['./new-trip.page.scss'],
})
export class NewTripPage implements OnInit {
  @ViewChild('formTrip', { static: true }) formTrip: any;

  trip: Trip = {} as Trip;
  isSave: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  saveTrip() {
    let { trip, isSave } = this.formTrip.saveForm();
    if (isSave) {
      this.isSave = isSave;
      this.trip = trip;
    }
  }
}
