import { LISTS } from '../../constants';
import { getTableDataListWithValues } from '../../utils';

describe('getTableDataListWithValues', () => {
  const symbol = 'BNBBTC';
  const latestPrice = '0.00184990';
  const openPrice = '0.00187580';
  const highPrice = '0.00182500';
  const lowPrice = '2332.46079005';
  const quoteVolume = '0.00184780';

  it('getTableDataListWithValues with data', () => {
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
        symbol,
        latestPrice,
        openPrice,
        highPrice,
        lowPrice,
        quoteVolume,
      ),
    ).toEqual(expectedData);
  });

  it('getTableDataListWithValues toMatchSnapshot', () => {
    expect(
      getTableDataListWithValues(
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
  it('getTableDataListWithValues without data', () => {
    const { TABLE_DATA_LIST } = LISTS;

    expect(getTableDataListWithValues()).toEqual(TABLE_DATA_LIST);
  });

  it('getTableDataListWithValues without data toMatchSnapshot', () => {
    expect(getTableDataListWithValues()).toMatchSnapshot();
  });
});
