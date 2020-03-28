import React from 'react';
import { shallow } from 'enzyme';
import { MarketPairs } from '../../containers/MarketPairs';

describe('MarketPairs container', () => {
  const props = {
    marketPairs: {},
    activeMarket: {},
    connectSocket: false,
    setActiveMarket: () => {},
    updateMarketPairs: () => {},
    toggleSocketStreams: () => {},
  };

  describe('MarketPairs container initial', () => {
    const marketPairs = shallow(<MarketPairs {...props} />);

    it('renders initial', () => {
      expect(marketPairs.find('Loader')).toHaveLength(1);
    });

    it('not render <h2>', () => {
      expect(marketPairs.find('h2')).toHaveLength(0);
    });

    it('not render <Table />', () => {
      expect(marketPairs.find('Table')).toHaveLength(0);
    });

    it('renders properly', () => {
      expect(marketPairs).toMatchSnapshot();
    });
  });

  describe('MarketPairs container isLoaded', () => {
    const nextProps = {
      ...props,
      activeMarket: {
        market: 'BTC',
      },
      marketPairs: {
        BNBBTC: {},
        ETHUSDT: {},
        ENJBTC: {},
      },
    };

    const marketPairs = shallow(<MarketPairs {...nextProps} />);

    it('renders header', () => {
      expect(marketPairs.find('h2').text()).toEqual(
        "The World's Leading Cryptocurrency Exchange",
      );
    });

    it('render only one <h2>', () => {
      expect(marketPairs.find('h2')).toHaveLength(1);
    });

    it('renders <Table /> template', () => {
      expect(marketPairs.find('Table')).toHaveLength(1);
    });

    it('not render <Loader />', () => {
      expect(marketPairs.find('Loader')).toHaveLength(0);
    });

    it('renders properly', () => {
      expect(marketPairs).toMatchSnapshot();
    });
  });

  describe('MarketPairs container with connectSocket', () => {
    const nextProps = {
      ...props,
      activeMarket: {
        market: 'BTC',
      },
      marketPairs: {
        BNBBTC: {},
        ETHUSDT: {},
        ENJBTC: {},
      },
      connectSocket: true,
    };

    const marketPairs = shallow(<MarketPairs {...nextProps} />);

    describe('connectSocket connectSocket', () => {
      it('renders Disconnect', () => {
        expect(marketPairs.find('button.btn').text()).toEqual('Disconnect');
      });

      it('renders properly', () => {
        expect(marketPairs).toMatchSnapshot();
      });
    });

    describe('MarketPairs container without connectSocket', () => {
      const nextProps = {
        ...props,
        activeMarket: {
          market: 'BTC',
        },
        marketPairs: {
          BNBBTC: {},
          ETHUSDT: {},
          ENJBTC: {},
        },
        connectSocket: false,
      };

      const marketPairs = shallow(<MarketPairs {...nextProps} />);

      describe('connectSocket connectSocket', () => {
        it('renders Connect', () => {
          expect(marketPairs.find('button.btn').text()).toEqual('Connect');
        });

        it('renders properly', () => {
          expect(marketPairs).toMatchSnapshot();
        });
      });
    });
  });
});
