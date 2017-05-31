import * as layout from 'app/actions/layout';

export interface LayoutState {
  sideMenuOpened: boolean
}

export const INITIAL_STATE: LayoutState = {
  sideMenuOpened: false
};

export function layoutReducer (
  state = INITIAL_STATE,
  action: layout.Actions
): LayoutState {

  const lookUp = {
    [layout.OPEN_MENU]: (): LayoutState => {
      return {
        ...state,
        sideMenuOpened: true
      }
    },
    [layout.CLOSE_MENU]: (): LayoutState => INITIAL_STATE
  };

  return lookUp[action.type] ? lookUp[action.type]()
    : state
}
