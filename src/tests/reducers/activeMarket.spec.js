import { SET_ACTIVE_MARKET } from '../../constants';
import activeMarket, { initState } from '../../reducers/activeMarket';

describe('activeMarket reducer', () => {
  it(`${SET_ACTIVE_MARKET}`, () => {
    const action = {
      type: SET_ACTIVE_MARKET,
      data: {
        market: 'BTC',
      },
    };

    const { data } = action;

    expect(activeMarket(initState, action)).toEqual(data);
  });
});
