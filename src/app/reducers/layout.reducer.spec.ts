import {
  layoutReducer,
  INITIAL_STATE,
  LayoutState
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
        menu: 'open'
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

});
