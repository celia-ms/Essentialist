import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, delay } from 'rxjs/operators';
import { SnackBarService } from 'src/app/core/services/snackbar.service';
import { Trip } from '../../models/trip';
import { TripService } from '../../services/trip.service';
import {
  getTrips,
  getTripByHash,
  saveTrips,
  saveTrip,
  setIsLoadingTrips,
} from './trip.actions';

@Injectable()
export class TripEffects {
  constructor(
    private snackBarService: SnackBarService,
    private actions$: Actions,
    private tripService: TripService
  ) {}

  getTrips$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getTrips),
      delay(1000),
      exhaustMap(() =>
        this.tripService.getTrips().pipe(
          switchMap((trips: Trip[]) => [
            saveTrips({ trips: trips }),
            setIsLoadingTrips({ isLoadingTrips: false }),
          ]),
          catchError(() => {
            this.snackBarService.error('error.get-trips');
            return EMPTY;
          })
        )
      )
    );
  });

  getTripByHash$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getTripByHash),
      exhaustMap((action) =>
        this.tripService.getTripByHash(action.hash).pipe(
          map((trip: Trip) => saveTrip({ trip: trip })),
          catchError(() => {
            this.snackBarService.error('error.get-trip-by-hash');
            return EMPTY;
          })
        )
      )
    );
  });
}
