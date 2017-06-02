import {
  layoutReducer,
  INITIAL_STATE,
  LayoutState, getSideMenuOpenedState
} from './layout.reducer';
import * as actions from 'app/actions/layout';

describe('layout reducer tests', () => {

  describe('undefined action ', () => {
    it('should return initial state ', () => {
      const action: any = {};

      const result = layoutReducer(undefined, action);
      expect(result).toEqual(INITIAL_STATE);
    });
  });

  describe('open menu action ', () => {
    it('should return initial state ', () => {
      const action: actions.OpenMenuAction = new actions.OpenMenuAction();

      const expectedResults: LayoutState = {
        sideMenuOpened: true
      };

      const result = layoutReducer(undefined, action);
      expect(result).toEqual(expectedResults);
    });
  });

  describe('close menu action ', () => {
    it('should return initial state ', () => {
      const action: actions.CloseMenuAction = new actions.CloseMenuAction();

      const result = layoutReducer(undefined, action);
      expect(result).toEqual(INITIAL_STATE);
    });
  });

  describe('getSideMenuOpenedState select', () => {
    it('result should be equal to initial state sideMenuOpened', () => {
      const result = getSideMenuOpenedState(INITIAL_STATE);
      expect(result).toEqual(INITIAL_STATE.sideMenuOpened)
    })

  })

});
