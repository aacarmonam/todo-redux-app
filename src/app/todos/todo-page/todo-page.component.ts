import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  completeAll: boolean = false;

  constructor(private store: Store<AppState>) { }

  toggleAll(): void {
    this.completeAll = !this.completeAll;

    this.store.dispatch(
      actions.toggleAll({ toggle: this.completeAll })
    );
  }

  ngOnInit(): void {
  }

}
