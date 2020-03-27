import { ACTION_TYPES } from '../../constants';
import marketPairs, { initState } from '../../reducers/marketPairs';

describe('marketPairs reducer', () => {
  const { UPDATE_MARKET_PAIRS } = ACTION_TYPES;

  const action = {
    type: UPDATE_MARKET_PAIRS,
    data: {
      BNBBTC: {},
      ETHUSDT: {},
      ENJBTC: {},
    },
  };

  const { data } = action;

  const expectedData = {
    ...initState,
    ...data,
  };

  it(`${UPDATE_MARKET_PAIRS}`, () => {
    expect(marketPairs(initState, action)).toEqual(expectedData);
  });

  it(`should handle ${UPDATE_MARKET_PAIRS}`, () => {
    expect(marketPairs(initState, action)).toMatchSnapshot();
  });
});

describe('marketPairs reducer initial state', () => {
  it('should return the initial state', () => {
    expect(marketPairs(initState, {})).toEqual(initState);
  });

  it('returns properly', () => {
    expect(marketPairs(initState, {})).toMatchSnapshot();
  });
});
