import * as layout from 'app/actions/layout';

export type HeaderMenuState = 'open' | 'closed';

export interface LayoutState {
  menu: HeaderMenuState
}

export const INITIAL_STATE: LayoutState = {
  menu: 'closed'
};

export function layoutReducer (
  state = INITIAL_STATE,
  action: layout.Actions
): LayoutState {

  const lookUp = {
    [layout.OPEN_MENU]: (): LayoutState => {
      return {
        ...state,
        menu: 'open'
      }
    },
    [layout.CLOSE_MENU]: (): LayoutState => INITIAL_STATE
  };

  return lookUp[action.type] ? lookUp[action.type]()
    : state
}
