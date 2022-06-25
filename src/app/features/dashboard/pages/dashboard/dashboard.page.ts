import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { tripMock } from 'src/app/core/mocks/trip.mock';
import { Trip } from 'src/app/core/models/trip';
import { AppState } from 'src/app/core/store/app.state';
import { clearTripState, getTrips } from 'src/app/core/store/trip/trip.actions';
import * as tripSelector from 'src/app/core/store/trip/trip.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {
  onGoingTrip: Trip = tripMock;
  upcomingTrips: Trip[] = [];
  pastTrips: Trip[] = [];

  carouselOptions = { items: 3, dots: false, nav: true, slideBy: 3 };

  panelOpenState = false;

  columns: number = 3;
  rowHeight: string = '420px';

  isLoading: boolean = false;

  subscriptions = new Subscription();

  constructor(private store: Store<AppState>) {
    this.subscriptions.add(
      this.store.pipe(select(tripSelector.getTrips)).subscribe((trips) => {
        this.upcomingTrips = trips;
        this.pastTrips = trips;
      })
    );

    this.subscriptions.add(
      this.store
        .pipe(select(tripSelector.getIsLoadingTrips))
        .subscribe((isLoadingTrips) => {
          this.isLoading = isLoadingTrips;
        })
    );
  }

  ngOnInit(): void {
    this.setDimensions(window);
    this.getTrips();
  }

  getTrips() {
    this.store.dispatch(getTrips());
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

  ngOnDestroy(): void {
    this.store.dispatch(clearTripState());
    this.subscriptions.unsubscribe();
  }
}
