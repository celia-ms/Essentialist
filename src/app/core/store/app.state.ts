import { ActionReducerMap } from '@ngrx/store';
import { TripEffects } from './trip/trip.effects';
import { TripReducer, TripState } from './trip/trip.reducers';

export interface AppState {
  trip: TripState;
}

export const appReducers: ActionReducerMap<AppState> = {
  trip: TripReducer,
};

export const appEffects: any[] = [TripEffects];
