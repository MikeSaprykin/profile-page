import {storeReducer} from "app/reducers";
describe('index reducer tests', () => {

  const storeReducerResult = storeReducer({}, {});

  it('should be defined', () => {
    expect(storeReducerResult).toBeDefined();
  })

});
