import { LISTS } from '../../constants';
import { getTableDataListWithValues } from '../../utils';

const { TABLE_DATA_LIST } = LISTS;

const symbol = 'BNBBTC';
const latestPrice = '0.00184990';
const openPrice = '0.00187580';
const highPrice = '0.00182500';
const lowPrice = '2332.46079005';
const quoteVolume = '0.00184780';

describe('getTableDataListWithValues', () => {
  it('getTableDataListWithValues with TABLE_DATA_LIST', () => {
    const expectedData = [
      { title: 'Pair', value: symbol, bold: true },
      { title: 'Latest Price', value: latestPrice },
      { title: 'Open', value: openPrice },
      { title: 'High', value: highPrice },
      { title: 'Low', value: lowPrice },
      { title: 'Volume', value: quoteVolume },
    ];

    expect(
      getTableDataListWithValues(
        TABLE_DATA_LIST,
        symbol,
        latestPrice,
        openPrice,
        highPrice,
        lowPrice,
        quoteVolume,
      ),
    ).toEqual(expectedData);
  });

  it('getTableDataListWithValues with TABLE_DATA_LIST toMatchSnapshot', () => {
    expect(
      getTableDataListWithValues(
        TABLE_DATA_LIST,
        symbol,
        latestPrice,
        openPrice,
        highPrice,
        lowPrice,
        quoteVolume,
      ),
    ).toMatchSnapshot();
  });
});

describe('getTableDataListWithValues initial state', () => {
  it('should return the initial state', () => {
    expect(getTableDataListWithValues()).toEqual(TABLE_DATA_LIST);
  });

  it('returns properly', () => {
    expect(getTableDataListWithValues()).toMatchSnapshot();
  });
});

describe('getTableDataListWithValues fake state', () => {
  const list = [
    { title: 'Baase asset' },
    { title: 'Quote asset' },
    { title: 'Parent market' },
    { title: 'Category of the parent market' },
  ];

  it('getTableDataListWithValues with fake data', () => {
    expect(
      getTableDataListWithValues(
        list,
        symbol,
        latestPrice,
        openPrice,
        highPrice,
        lowPrice,
        quoteVolume,
      ),
    ).toEqual(list);
  });

  it('getTableDataListWithValues with fake data toMatchSnapshot', () => {
    expect(
      getTableDataListWithValues(
        list,
        symbol,
        latestPrice,
        openPrice,
        highPrice,
        lowPrice,
        quoteVolume,
      ),
    ).toMatchSnapshot();
  });
});
