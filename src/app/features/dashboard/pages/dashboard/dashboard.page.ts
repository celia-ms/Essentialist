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
  pastTrips: Trip[] = JSON.parse(tripsMock);

  carouselOptions = { items: 3, dots: false, nav: true, slideBy: 3 };

  panelOpenState = false;

  columns: number = 3;
  rowHeight: string = '420px';

  constructor() {}

  ngOnInit(): void {
    this.setDimensions(window);
  }

  setDimensions(event: any) {
    const width = event.innerWidth;
    if (width < 768) {
      this.refreshDimensions(1, '340px');
    } else {
      if (width >= 768 && width < 992) {
        this.refreshDimensions(2, '380px');
      } else {
        if (width >= 992 && width < 1860) {
          this.refreshDimensions(3, '420px');
        }
      }
    }
  }

  refreshDimensions(columns: number, rowHeight: string) {
    this.columns = columns;
    this.rowHeight = rowHeight;
  }

  trackByTrip(index: number, item: Trip) {
    return index;
  }
}
