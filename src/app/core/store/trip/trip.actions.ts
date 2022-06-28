import { createAction, props, union } from '@ngrx/store';
import { Trip } from '../../models/trip';

export const getTrips = createAction('[TRIP] Get trips');

export const getTripByHash = createAction(
  '[TRIP] Get trip by hash',
  props<{ hash: string }>()
);

export const createTrip = createAction(
  '[TRIP] Create trip',
  props<{ trip: Trip }>()
);

export const saveTrips = createAction(
  '[TRIP] Save trips',
  props<{ trips: Trip[] }>()
);

export const saveTrip = createAction(
  '[TRIP] Save trip',
  props<{ trip: Trip }>()
);

export const setIsLoadingTrips = createAction(
  '[TRIP] Set loading trips',
  props<{ isLoadingTrips: boolean }>()
);

export const clearTripState = createAction('[TRIP] Clear state');

const actions = union({
  getTrips,
  getTripByHash,
  createTrip,
  saveTrips,
  saveTrip,
  clearTripState,
  setIsLoadingTrips,
});

export type TripActions = typeof actions;
