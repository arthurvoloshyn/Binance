import store from '../../store';

describe('store', () => {
  it('should have a store', () => {
    expect(store.getState()).toMatchSnapshot();
  });

  it('initial state', () => {
    const expectedState = {
      activeMarket: {},
      connectSocket: true,
      marketPairs: {},
    };

    expect(store.getState()).toEqual(expectedState);
  });
});
