import React from 'react';
import { shallow } from 'enzyme';
import Row from '../../components/Row';

describe('Row component', () => {
  const props = {
    symbol: 'BNBBTC',
    latestPrice: '0.00184990',
    openPrice: '0.00187580',
    highPrice: '0.00182500',
    lowPrice: '2332.46079005',
    quoteVolume: '0.00184780',
  };

  const row = shallow(<Row {...props} />);

  it('renders properly', () => {
    expect(row.html()).toMatchSnapshot();
  });

  it('renders table item', () => {
    expect(row.find('.table-item')).toHaveLength(1);
  });

  it('renders symbol', () => {
    expect(row.find('.title').text()).toEqual(props.symbol);
  });

  describe('correct render columns', () => {
    it('renders 6 middle columns', () => {
      expect(row.find('.col')).toHaveLength(6);
    });

    it('renders 6 small columns', () => {
      expect(row.find('.col-4')).toHaveLength(6);
    });
  });

  describe('correct render for first row', () => {
    it('Pair', () => {
      expect(
        row
          .find('h2')
          .first()
          .text(),
      ).toEqual('Pair');
    });

    it('Latest Price', () => {
      expect(
        row
          .find('h2')
          .at(1)
          .text(),
      ).toEqual('Latest Price');
    });
  });
});
