import { ACTION_TYPES } from '../../constants';
import { updateMarketPairs } from '../../actions';

describe('updateMarketPairs action', () => {
  const { UPDATE_MARKET_PAIRS } = ACTION_TYPES;

  const expectedActionUpdateMarketPairs = {
    type: UPDATE_MARKET_PAIRS,
    data: {
      BNBBTC: {},
      ETHUSDT: {},
      ENJBTC: {},
    },
  };

  const { data } = expectedActionUpdateMarketPairs;

  it('updateMarketPairs', () => {
    expect(updateMarketPairs(data)).toEqual(expectedActionUpdateMarketPairs);
  });

  it('updateMarketPairs should return an action', () => {
    expect(updateMarketPairs(data)).toMatchSnapshot();
  });
});
