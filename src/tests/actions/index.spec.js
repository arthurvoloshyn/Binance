import {
  SET_ACTIVE_MARKET,
  UPDATE_MARKET_PAIRS,
  TOGGLE_SOCKET_STREAMS,
} from '../../constants';
import {
  setActiveMarket,
  updateMarketPairs,
  toggleSocketStreams,
} from '../../actions';

describe('Index actions', () => {
  it('setActiveMarket', () => {
    const expectedActionSetActiveMarket = {
      type: SET_ACTIVE_MARKET,
      data: {
        market: 'BTC',
      },
    };

    const { data } = expectedActionSetActiveMarket;

    expect(setActiveMarket(data)).toEqual(expectedActionSetActiveMarket);
  });

  it('updateMarketPairs', () => {
    const expectedActionUpdateMarketPairs = {
      type: UPDATE_MARKET_PAIRS,
      data: {
        BNBBTC: {},
        ETHUSDT: {},
        ENJBTC: {},
      },
    };

    const { data } = expectedActionUpdateMarketPairs;

    expect(updateMarketPairs(data)).toEqual(expectedActionUpdateMarketPairs);
  });

  it('toggleSocketStreams', () => {
    const expectedActionToggleSocketStreams = {
      type: TOGGLE_SOCKET_STREAMS,
      status: false,
    };

    const { status } = expectedActionToggleSocketStreams;

    expect(toggleSocketStreams(status)).toEqual(
      expectedActionToggleSocketStreams,
    );
  });
});
