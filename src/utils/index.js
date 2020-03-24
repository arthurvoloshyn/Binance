import { TABLE_DATA_LIST } from '../constants';

export const getTableDataListWithValues = (
  symbol,
  latestPrice,
  openPrice,
  highPrice,
  lowPrice,
  quoteVolume,
) =>
  TABLE_DATA_LIST.map(item => {
    switch (item.title) {
      case 'Pair':
        return { ...item, value: symbol };
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
