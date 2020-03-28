import { ACTION_TYPES } from '../../constants';
import store from '../../store';
import activeMarket, {
  initState as activeMarketInitState,
} from '../../reducers/activeMarket';
import connectSocket, {
  initState as connectSocketInitState,
} from '../../reducers/connectSocket';
import marketPairs, {
  initState as marketPairsInitState,
} from '../../reducers/marketPairs';
import {
  toggleSocketStreams,
  updateMarketPairs,
  setActiveMarket,
} from '../../actions';

describe('store', () => {
  describe('store initial state', () => {
    it('initial state', () => {
      const expectedState = {
        activeMarket: activeMarket(activeMarketInitState, {}),
        connectSocket: connectSocket(connectSocketInitState, {}),
        marketPairs: marketPairs(marketPairsInitState, {}),
      };

      expect(store.getState()).toEqual(expectedState);
    });

    it('should have a store', () => {
      expect(store.getState()).toMatchSnapshot();
    });
  });

  describe('store toggleSocketStreams', () => {
    it('creates toggleSocketStreams when toggling socket streams has been done', () => {
      const { TOGGLE_SOCKET_STREAMS } = ACTION_TYPES;
      const expectedAction = {
        type: TOGGLE_SOCKET_STREAMS,
        status: false,
      };

      const { status } = expectedAction;

      store.dispatch(toggleSocketStreams(status));

      expect(store.getState().connectSocket).toEqual(
        connectSocket(connectSocketInitState, expectedAction),
      );
    });
  });

  describe('store updateMarketPairs', () => {
    it('creates updateMarketPairs when updating market pairs has been done', () => {
      const { UPDATE_MARKET_PAIRS } = ACTION_TYPES;
      const expectedAction = {
        type: UPDATE_MARKET_PAIRS,
        data: {
          BNBBTC: {},
          ETHUSDT: {},
          ENJBTC: {},
        },
      };

      const { data } = expectedAction;

      store.dispatch(updateMarketPairs(data));

      expect(store.getState().marketPairs).toEqual(
        marketPairs(marketPairsInitState, expectedAction),
      );
    });
  });

  describe('store setActiveMarket', () => {
    it('creates setActiveMarket when setting active market has been done', () => {
      const { SET_ACTIVE_MARKET } = ACTION_TYPES;
      const expectedAction = {
        type: SET_ACTIVE_MARKET,
        data: {
          market: 'BTC',
        },
      };

      const { data } = expectedAction;

      store.dispatch(setActiveMarket(data));

      expect(store.getState().activeMarket).toEqual(
        activeMarket(activeMarketInitState, expectedAction),
      );
    });
  });
});
