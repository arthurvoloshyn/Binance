import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../components/Table';

describe('Table component', () => {
  describe('Table component with filter and ticker', () => {
    const props = {
      filter: 'BTC',
      ticker: {
        BNBBTC: {
          symbol: 'BNBBTC',
        },
        ETHUSDT: {
          symbol: 'ETHUSDT',
        },
        ENJBTC: {
          symbol: 'ENJBTC',
        },
      },
    };

    const table = shallow(<Table {...props} />);

    it('renders properly', () => {
      expect(table).toMatchSnapshot();
    });

    it('renders 2 rows', () => {
      expect(table.find('Row')).toHaveLength(2);
    });

    describe('correct render for first row', () => {
      it('Pair', () => {
        expect(
          table
            .find('h2')
            .first()
            .text(),
        ).toEqual('Pair');
      });

      it('info', () => {
        expect(
          table
            .find('h2')
            .at(1)
            .text(),
        ).toEqual('Latest Price');
      });
    });
  });

  describe('Table component with default props', () => {
    const props = {};

    const table = shallow(<Table {...props} />);

    it('renders properly', () => {
      expect(table).toMatchSnapshot();
    });

    it('not render rows', () => {
      expect(table.find('Row')).toHaveLength(0);
    });
  });
});
