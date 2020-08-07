import { createAction, props } from '@ngrx/store';

export type validFilters = 'all' | 'active' | 'completed';

export const setFilter = createAction(
  '[TODO Filters] Set filter',
  props<{ filter: validFilters }>()
);
