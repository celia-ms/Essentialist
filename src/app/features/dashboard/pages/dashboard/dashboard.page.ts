import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Trip } from 'src/app/core/models/trip';
import { AppState } from 'src/app/core/store/app.state';
import { clearTripState, getTrips } from 'src/app/core/store/trip/trip.actions';
import * as tripSelector from 'src/app/core/store/trip/trip.selector';
import * as _moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {
  onGoingTrip!: Trip;
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
        this.organizeTrips(trips);
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

  trackByTrip(index: number, item: Trip) {
    return index;
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearTripState());
    this.subscriptions.unsubscribe();
  }

  private refreshDimensions(columns: number, rowHeight: string) {
    this.columns = columns;
    this.rowHeight = rowHeight;
  }

  /* *
   * Upcoming Trips - trips in which arrival_date is a future date, bigger than 7 days ahead.
   * Past Trips - trips with arrival_date on a past date (a day or more before the current day).
   * Current trip - trips with the current date between departure_date and arrival_date, or with arrival_date is in within the next 7 days. It will
   * only be a current trip at the same time. Current trip will be visualized at the top (in the called hero section) as shown on the design
   * */
  private organizeTrips(trips: Trip[]) {
    this.pastTrips = [];
    this.upcomingTrips = [];
    let upcomingDate = _moment().add(7, 'days').format('YYYY-MM-DD');
    trips.forEach((trip) => {
      trip = {
        ...trip,
        summary_date: this.convertDates(trip.departure_date, trip.arrival_date),
      };
      if (
        _moment().isSameOrAfter(trip.departure_date) &&
        (_moment().isSameOrBefore(trip.arrival_date) ||
          _moment(upcomingDate).isBefore(trip.arrival_date))
      ) {
        this.onGoingTrip = trip;
      } else {
        if (_moment().isAfter(trip.arrival_date)) {
          this.pastTrips.push(trip);
        } else {
          if (_moment(upcomingDate).isBefore(trip.arrival_date)) {
            this.upcomingTrips.push(trip);
          }
        }
      }
    });
    this.upcomingTrips = this.sortTrips(this.upcomingTrips, true);
    this.pastTrips = this.sortTrips(this.pastTrips, false);
  }

  private convertDates(departure_date: string, arrival_date: string) {
    let date = '';
    if (_moment(departure_date).year() === _moment(arrival_date).year()) {
      if (_moment(departure_date).month() === _moment(arrival_date).month()) {
        date = `${_moment(departure_date).format('MMMM Do')} to ${_moment(
          arrival_date
        ).format('Do, YYYY')}`;
      } else {
        date = `${_moment(departure_date).format('MMMM Do')} to ${_moment(
          arrival_date
        ).format('MMMM Do, YYYY')}`;
      }
    } else {
      date = `${_moment(departure_date).format('MMMM Do, YYYY')} to ${_moment(
        arrival_date
      ).format('MMMM Do, YYYY')}`;
    }
    return date;
  }

  private sortTrips(trips: Trip[], isAsc: boolean) {
    return trips.sort((a, b) =>
      isAsc
        ? _moment(a.departure_date).diff(b.departure_date)
        : _moment(b.departure_date).diff(a.departure_date)
    );
  }
}
