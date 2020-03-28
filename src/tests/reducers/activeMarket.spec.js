import { ACTION_TYPES } from '../../constants';
import activeMarket, { initState } from '../../reducers/activeMarket';

describe('activeMarket reducer', () => {
  describe('activeMarket reducer with action', () => {
    const { SET_ACTIVE_MARKET } = ACTION_TYPES;

    const action = {
      type: SET_ACTIVE_MARKET,
      data: {
        market: 'BTC',
      },
    };

    it(`${SET_ACTIVE_MARKET}`, () => {
      const { data } = action;

      expect(activeMarket(initState, action)).toEqual(data);
    });

    it(`should handle ${SET_ACTIVE_MARKET}`, () => {
      expect(activeMarket(initState, action)).toMatchSnapshot();
    });
  });

  describe('activeMarket reducer initial state', () => {
    const action = {};

    it('should return the initial state', () => {
      expect(activeMarket(initState, action)).toEqual(initState);
    });

    it('returns properly', () => {
      expect(activeMarket(initState, action)).toMatchSnapshot();
    });
  });
});
