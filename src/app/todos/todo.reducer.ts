import { createReducer, on, State } from '@ngrx/store';
import { add, edit, complete, eliminate, toggleAll, deleteCompleted } from './todo.actions';
import { Todo } from './models/todo.model';


export const initialState: Todo[] = [
  new Todo('Salvar el Mundo'),
  new Todo('Hacer la compra'),
  new Todo('Limpiar el coche'),
];

const _todoReducer = createReducer(initialState,
  on(add, (state, { texto }) => [...state, new Todo(texto)]),

  on(edit, (state, { id, texto }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto
        };
      } else {
        return todo;
      }
    });
  }),

  on(complete, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),

  on(eliminate, (state, { id }) => state.filter(todo => todo.id !== id)),

  on(toggleAll, (state, { toggle }) => {
    return state.map(todo => {
      return {
        ...todo,
        completado: toggle
      };
    });
  }),

  on(deleteCompleted, state => state.filter(todo => !todo.completado)),

);

export function todoReducer(state, action): Todo[] {
  return _todoReducer(state, action);
}
