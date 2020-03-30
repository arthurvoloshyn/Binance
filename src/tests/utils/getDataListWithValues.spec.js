import { LISTS } from '../../constants';
import { getDataListWithValues } from '../../utils';

const { TABLE_DATA_LIST } = LISTS;

describe('getDataListWithValues util', () => {
  const symbol = 'BNBBTC';
  const latestPrice = '0.00184990';
  const openPrice = '0.00187580';
  const highPrice = '0.00182500';
  const lowPrice = '2332.46079005';
  const quoteVolume = '0.00184780';

  describe('getDataListWithValues TABLE_DATA_LIST', () => {
    it('getDataListWithValues with TABLE_DATA_LIST', () => {
      const expectedData = [
        { title: 'Pair', value: symbol, bold: true },
        { title: 'Latest Price', value: latestPrice },
        { title: 'Open', value: openPrice },
        { title: 'High', value: highPrice },
        { title: 'Low', value: lowPrice },
        { title: 'Volume', value: quoteVolume },
      ];

      expect(
        getDataListWithValues(
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

    it('getDataListWithValues with TABLE_DATA_LIST toMatchSnapshot', () => {
      expect(
        getDataListWithValues(
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

  describe('getDataListWithValues initial state', () => {
    it('should return the initial state', () => {
      expect(getDataListWithValues()).toEqual(TABLE_DATA_LIST);
    });

    it('returns properly', () => {
      expect(getDataListWithValues()).toMatchSnapshot();
    });
  });

  describe('getDataListWithValues other list', () => {
    const list = [
      { title: 'Baase asset' },
      { title: 'Quote asset' },
      { title: 'Parent market' },
      { title: 'Category of the parent market' },
    ];

    it('getDataListWithValues with other list', () => {
      expect(
        getDataListWithValues(
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

    it('getDataListWithValues with other list toMatchSnapshot', () => {
      expect(
        getDataListWithValues(
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
});
