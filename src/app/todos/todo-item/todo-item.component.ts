import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  chkCompletado: FormControl;
  txtCompletado: FormControl;

  editMode: boolean = false;

  constructor(private store: Store<AppState>) { }

  edit(): void {
    this.editMode = true;
    this.txtCompletado.setValue(this.todo.texto);

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  onBlur(): void {
    this.editMode = false;
    if (this.txtCompletado.valid && this.txtCompletado.value !== this.todo.texto) {
      this.store.dispatch(
        actions.edit({
          id: this.todo.id,
          texto: this.txtCompletado.value
        })
      );
    }
  }

  delete(): void {
    this.store.dispatch(actions.eliminate({ id: this.todo.id }));
  }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtCompletado = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe((valor) => {
      this.store.dispatch(
        actions.complete({ id: this.todo.id })
      );
    });
  }

}
