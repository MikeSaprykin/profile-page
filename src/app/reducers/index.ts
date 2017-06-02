import { combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { createSelector } from 'reselect'
import * as layout from  './layout.reducer';

export interface AppState {
  layout: layout.LayoutState
}

const reducers = {
  router: routerReducer,
  layout: layout.layoutReducer
};

const combinedReducers = combineReducers(reducers);

export function storeReducer(state: any, action: any) {
  return combinedReducers(state, action);
}

export const getLayoutState = (state: AppState): layout.LayoutState => state.layout;

export const getMenuState = createSelector(getLayoutState, layout.getSideMenuOpenedState);
