import { ACTION_TYPES } from '../../constants';
import marketPairs, { initState } from '../../reducers/marketPairs';

describe('marketPairs reducer', () => {
  describe('marketPairs reducer with action', () => {
    const { UPDATE_MARKET_PAIRS } = ACTION_TYPES;

    const action = {
      type: UPDATE_MARKET_PAIRS,
      data: {
        BNBBTC: {},
        ETHUSDT: {},
        ENJBTC: {},
      },
    };

    it(`${UPDATE_MARKET_PAIRS}`, () => {
      const { data } = action;

      const expectedData = {
        ...initState,
        ...data,
      };

      expect(marketPairs(initState, action)).toEqual(expectedData);
    });

    it(`should handle ${UPDATE_MARKET_PAIRS}`, () => {
      expect(marketPairs(initState, action)).toMatchSnapshot();
    });
  });

  describe('marketPairs reducer initial state', () => {
    const action = {};

    it('should return the initial state', () => {
      expect(marketPairs(initState, action)).toEqual(initState);
    });

    it('returns properly', () => {
      expect(marketPairs(initState, action)).toMatchSnapshot();
    });
  });
});
