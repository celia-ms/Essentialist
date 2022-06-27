import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { paths } from 'src/app/shared/paths';
import { map } from 'rxjs/operators';
import { Trip } from '../models/trip';
import * as _moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http
      .get(paths.trips)
      .pipe(map((response: any) => response.results));
  }

  getTripByHash(hash: string): Observable<Trip> {
    return this.http
      .get(paths.trips)
      .pipe(
        map((response: any) =>
          response.results.find((trip: any) => trip.hash === hash)
        )
      );
  }

  createTrip(trip: Trip): Trip {
    return {
      ...trip,
      hash: this.makeHash(32),
    };
  }

  sortTrips(trips: Trip[], isAsc: boolean) {
    return trips.sort((a, b) =>
      isAsc
        ? _moment(a.departure_date).diff(b.departure_date)
        : _moment(b.departure_date).diff(a.departure_date)
    );
  }

  private makeHash(length: number) {
    let hash = '';
    let characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      hash += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return hash;
  }
}
