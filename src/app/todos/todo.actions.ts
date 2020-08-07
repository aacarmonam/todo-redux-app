import { createAction, props } from '@ngrx/store';

export const add = createAction(
  '[TODO] Nueva tarea',
  props<{ texto: string }>()
);

export const edit = createAction(
  '[TODO] Modificar tarea',
  props<{ id: number, texto: string }>()
);

export const complete = createAction(
  '[TODO] Completar tarea',
  props<{ id: number }>()
);

export const eliminate = createAction(
  '[TODO] Borrar tarea',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] Cambiar todos',
  props<{ toggle: boolean }>()
);

export const deleteCompleted = createAction(
  '[TODO] Borrar completados'
);
