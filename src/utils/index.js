import { LISTS } from '../constants';

const { TABLE_DATA_LIST } = LISTS;

export const getDataListWithValues = (list = TABLE_DATA_LIST, ...data) => {
  const [
    symbol,
    latestPrice,
    openPrice,
    highPrice,
    lowPrice,
    quoteVolume,
  ] = data;

  if (!data.length) return list;

  return list.map(item => {
    switch (item.title) {
      case 'Pair':
        return { ...item, value: symbol, bold: true };
      case 'Latest Price':
        return { ...item, value: latestPrice };
      case 'Open':
        return { ...item, value: openPrice };
      case 'High':
        return { ...item, value: highPrice };
      case 'Low':
        return { ...item, value: lowPrice };
      case 'Volume':
        return { ...item, value: quoteVolume };
      default:
        return { ...item };
    }
  });
};

export const getTickerBySymbol = (data = []) => {
  const ticker = {};

  data.forEach(
    ({
      s: symbol,
      c: latestPrice,
      p: priceChange,
      P: priceChangePercent,
      h: highPrice,
      l: lowPrice,
      q: quoteVolume,
      o: openPrice,
    }) => {
      ticker[symbol] = {
        symbol,
        latestPrice,
        priceChange,
        priceChangePercent,
        highPrice,
        lowPrice,
        quoteVolume,
        openPrice,
      };
    },
  );

  return ticker;
};
