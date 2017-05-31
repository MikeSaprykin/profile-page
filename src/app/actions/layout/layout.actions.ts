import { Action } from '@ngrx/store';
import * as types from './layout.types';

export class OpenMenuAction implements Action {
  readonly type = types.OPEN_MENU;
}

export class CloseMenuAction implements Action {
  readonly type = types.CLOSE_MENU;
}

export type Actions = OpenMenuAction | CloseMenuAction;
