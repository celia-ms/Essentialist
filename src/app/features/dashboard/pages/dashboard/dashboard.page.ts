import { Component, OnInit } from '@angular/core';
import { tripMock, tripsMock } from 'src/app/core/mocks/trip.mock';
import { Trip } from 'src/app/core/models/trip';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  onGoingTrip: Trip = tripMock;
  upcomingTrips: Trip[] = JSON.parse(tripsMock);

  carouselOptions = { items: 3, dots: false, nav: true, slideBy: 3 };

  constructor() {}

  ngOnInit(): void {}
}
