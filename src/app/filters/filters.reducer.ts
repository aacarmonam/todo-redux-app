import { createReducer, on } from '@ngrx/store';
import { setFilter, validFilters } from './filters.action';


export const initialState: validFilters = 'all';

export const _filterReducer = createReducer(initialState,
  on(setFilter, (state, { filter }) => filter),
);

export function filterReducer(state, action): validFilters {
  return _filterReducer(state, action);
}
