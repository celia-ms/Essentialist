import { Component, Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/core/models/trip';

@Component({
  selector: 'app-card-trip',
  templateUrl: './card-trip.component.html',
  styleUrls: ['./card-trip.component.scss'],
})
export class CardTripComponent implements OnInit {
  @Input('trip') trip!: Trip;

  constructor() {}

  ngOnInit(): void {}
}
