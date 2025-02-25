import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';
import { AppState } from '../app.state';

// Select the entire counter state
export const selectCounterState = (state: AppState) => state.counter;

// Select the `count` property from the counter state
export const selectCount = createSelector(
  selectCounterState,
  (state) => state.count
);
