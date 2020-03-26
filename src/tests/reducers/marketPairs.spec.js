import { UPDATE_MARKET_PAIRS } from '../../constants';
import marketPairs, { initState } from '../../reducers/marketPairs';

describe('marketPairs reducer', () => {
  const action = {
    type: UPDATE_MARKET_PAIRS,
    data: {
      BNBBTC: {},
      ETHUSDT: {},
      ENJBTC: {},
    },
  };

  const { data } = action;

  it(`${UPDATE_MARKET_PAIRS}`, () => {
    expect(marketPairs(initState, action)).toEqual({
      ...initState,
      ...data,
    });
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
