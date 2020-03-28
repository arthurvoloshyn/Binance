import { getTickerBySymbol } from '../../utils';

describe('getTickerBySymbol util', () => {
  const data = [
    {
      s: 'BTCUSDT',
      c: '6626.19000000',
      h: '6842.59000000',
      l: '6573.41000000',
      q: '545581317.71130550',
      o: '6620.12000000',
    },
    {
      s: 'LRCBTC',
      c: '0.00000438',
      h: '0.00000476',
      l: '0.00000403',
      q: '86.99725405',
      o: '0.00000411',
    },
  ];

  describe('getTickerBySymbol', () => {
    it('getTickerBySymbol with data', () => {
      const {
        s: s1,
        c: c1,
        h: h1,
        l: l1,
        q: q1,
        o: o1,
        p: p1,
        P: P1,
      } = data[0];
      const {
        s: s2,
        c: c2,
        h: h2,
        l: l2,
        q: q2,
        o: o2,
        p: p2,
        P: P2,
      } = data[1];
      const expectedData = {
        [s1]: {
          symbol: s1,
          latestPrice: c1,
          priceChange: p1,
          priceChangePercent: P1,
          highPrice: h1,
          lowPrice: l1,
          quoteVolume: q1,
          openPrice: o1,
        },
        [s2]: {
          symbol: s2,
          latestPrice: c2,
          priceChange: p2,
          priceChangePercent: P2,
          highPrice: h2,
          lowPrice: l2,
          quoteVolume: q2,
          openPrice: o2,
        },
      };

      expect(getTickerBySymbol(data)).toEqual(expectedData);
    });

    it('getTickerBySymbol toMatchSnapshot', () => {
      expect(getTickerBySymbol(data)).toMatchSnapshot();
    });
  });

  describe('getTickerBySymbol initial state', () => {
    const expectedData = {};

    it('should return the initial state', () => {
      expect(getTickerBySymbol()).toEqual(expectedData);
    });

    it('returns properly', () => {
      expect(getTickerBySymbol()).toMatchSnapshot();
    });
  });
});
