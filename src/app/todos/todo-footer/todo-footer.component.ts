import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filters/filters.action';
import { deleteCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  currentFilter: actions.validFilters;
  filters: actions.validFilters[] = ['all', 'active', 'completed'];

  countPendings: number = 0;

  constructor(private store: Store<AppState>) { }

  setFilter(filter: actions.validFilters): void {
    this.store.dispatch(actions.setFilter({ filter }));
  }

  deleteCompleted(): void {
    this.store.dispatch(deleteCompleted());
  }

  ngOnInit(): void {
    // this.store.select('filter').subscribe((filter) => {
    //   this.currentFilter = filter;
    // });
    this.store.subscribe(state => {
      this. currentFilter = state.filter;
      this.countPendings = state.todos.filter(todo => !todo.completado).length;
    });
  }

}
