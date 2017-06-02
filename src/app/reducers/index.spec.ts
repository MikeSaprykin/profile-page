import {
  storeReducer,
  getLayoutState,
  AppState
} from "app/reducers";
import * as layout from './layout.reducer';

describe('index reducer tests', () => {

  const initialState: AppState = {
    layout: layout.INITIAL_STATE
  };

  const storeReducerResult = storeReducer({}, {});

  it('should be defined', () => {
    expect(storeReducerResult).toBeDefined();
  });

  describe('get layout state selector tests', () => {

    let layoutState: layout.LayoutState;

    it('result should be defined ', () => {
      layoutState = getLayoutState(initialState);
      expect(layoutState).toBeDefined();
    });

    it('result should be equal to initial layout state', () => {
      layoutState = getLayoutState(initialState);
      expect(layoutState).toEqual(layout.INITIAL_STATE);
    });

  })

});
