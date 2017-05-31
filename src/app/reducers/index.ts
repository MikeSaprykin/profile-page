import { combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

const reducers = {
  router: routerReducer,
};

const combinedReducers = combineReducers(reducers);

export function storeReducer(state: any, action: any) {
  return combinedReducers(state, action);
}
