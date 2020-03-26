import { SET_ACTIVE_MARKET } from '../../constants';
import activeMarket, { initState } from '../../reducers/activeMarket';

describe('activeMarket reducer', () => {
  const action = {
    type: SET_ACTIVE_MARKET,
    data: {
      market: 'BTC',
    },
  };

  const { data } = action;

  it(`${SET_ACTIVE_MARKET}`, () => {
    expect(activeMarket(initState, action)).toEqual(data);
  });

  it(`should handle ${SET_ACTIVE_MARKET}`, () => {
    expect(activeMarket(initState, action)).toMatchSnapshot();
  });
});

describe('activeMarket reducer initial state', () => {
  it('should return the initial state', () => {
    expect(activeMarket(initState, {})).toEqual(initState);
  });

  it('returns properly', () => {
    expect(activeMarket(initState, {})).toMatchSnapshot();
  });
});
