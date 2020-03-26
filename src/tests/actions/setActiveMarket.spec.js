import { SET_ACTIVE_MARKET } from '../../constants';
import { setActiveMarket } from '../../actions';

describe('setActiveMarket action', () => {
  const expectedActionSetActiveMarket = {
    type: SET_ACTIVE_MARKET,
    data: {
      market: 'BTC',
    },
  };

  const { data } = expectedActionSetActiveMarket;

  it('setActiveMarket', () => {
    expect(setActiveMarket(data)).toEqual(expectedActionSetActiveMarket);
  });

  it('setActiveMarket should return an action', () => {
    expect(setActiveMarket(data)).toMatchSnapshot();
  });
});
