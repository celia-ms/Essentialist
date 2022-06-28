import { Action, createReducer, on } from '@ngrx/store';
import { Trip } from '../../models/trip';
import {
  getTrips,
  getTripByHash,
  saveTrips,
  saveTrip,
  clearTripState,
  setIsLoadingTrips,
} from './trip.actions';

export interface TripState {
  trips: Trip[];
  trip: Trip;
  isLoadingTrips: boolean;
}

export const initialState: TripState = {
  trips: [],
  trip: {
    title: '',
    image: '',
    visibility_status: '',
    departure_date: '',
    arrival_date: '',
    hash: '',
    adults: 0,
    children: 0,
    infants: 0,
  },
  isLoadingTrips: false,
};

const _tripReducer = createReducer(
  initialState,
  on(getTrips, (state) => {
    return {
      ...state,
      isLoadingTrips: true,
    };
  }),
  on(getTripByHash, (state) => {
    return {
      ...state,
    };
  }),
  on(saveTrips, (state, { trips }) => {
    return {
      ...state,
      trips: trips,
    };
  }),
  on(saveTrip, (state, { trip }) => {
    return {
      ...state,
      trip: trip,
    };
  }),
  on(clearTripState, () => {
    return {
      ...initialState,
    };
  }),
  on(setIsLoadingTrips, (state, { isLoadingTrips }) => {
    return {
      ...state,
      isLoadingTrips: isLoadingTrips,
    };
  })
);

export function TripReducer(state: TripState | undefined, action: Action) {
  return _tripReducer(state, action);
}
