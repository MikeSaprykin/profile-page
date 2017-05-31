import { combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import {
  layoutReducer,
  LayoutState
} from './layout.reducer';

export interface AppState {
  layout: LayoutState
}

const reducers = {
  router: routerReducer,
  layout: layoutReducer
};

const combinedReducers = combineReducers(reducers);

export function storeReducer(state: any, action: any) {
  return combinedReducers(state, action);
}
