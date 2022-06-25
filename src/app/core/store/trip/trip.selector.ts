import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as tripReducer from './trip.reducers';

export const getTripState =
  createFeatureSelector<tripReducer.TripState>('trip');

export const getTrips = createSelector(
  getTripState,
  (state: tripReducer.TripState) => state.trips
);

export const getIsLoadingTrips = createSelector(
  getTripState,
  (state: tripReducer.TripState) => state.isLoadingTrips
);

export const getTrip = createSelector(
  getTripState,
  (state: tripReducer.TripState) => state.trip
);
