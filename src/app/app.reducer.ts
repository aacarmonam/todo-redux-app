import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { validFilters } from './filters/filters.action';
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filters/filters.reducer';

export interface AppState {
  todos: Todo[];
  filter: validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
};
