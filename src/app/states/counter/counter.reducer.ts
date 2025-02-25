import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export interface CounterState {
    count: number;
}

export const InitialCounter: CounterState = {
    count: 0,
};

export const counterReducer = createReducer(
    InitialCounter,
    on(increment, (state) => ({
        ...state, // Keep other state properties (if any)
        count: state.count + 1, // Update count
    })),
    on(decrement, (state) => ({
      ...state, // Keep other state properties (if any)
      count: state.count - 1, // Update count
  })),
  on(reset, (state) => ({
      ...state, // Keep other state properties (if any)
      count: 0, // Update count
  }))
);
