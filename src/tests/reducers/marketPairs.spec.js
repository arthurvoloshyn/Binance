import { UPDATE_MARKET_PAIRS } from '../../constants';
import marketPairs, { initState } from '../../reducers/marketPairs';

describe('marketPairs reducer', () => {
  it(`${UPDATE_MARKET_PAIRS}`, () => {
    const action = {
      type: UPDATE_MARKET_PAIRS,
      data: {
        BNBBTC: {},
        ETHUSDT: {},
        ENJBTC: {},
      },
    };

    const { data } = action;

    expect(marketPairs(initState, action)).toEqual({
      ...initState,
      ...data,
    });
  });
});
