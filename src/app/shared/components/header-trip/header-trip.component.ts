import { Component, Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/core/models/trip';

@Component({
  selector: 'app-header-trip',
  templateUrl: './header-trip.component.html',
  styleUrls: ['./header-trip.component.scss'],
})
export class HeaderTripComponent implements OnInit {
  @Input('trip') trip!: Trip;
  @Input('title') title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
