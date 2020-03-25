export const UPDATE_MARKET_PAIRS = 'UPDATE_MARKET_PAIRS';
export const SET_ACTIVE_MARKET = 'SET_ACTIVE_MARKET';
export const TOGGLE_SOCKET_STREAMS = 'TOGGLE_SOCKET_STREAMS';

export const BASE_PATH = 'wss://stream.binance.com';
export const STREAM_PATH = '/stream';
export const STREAM_PARAM = 'streams=';

export const PAIRS_LIST = ['BNB', 'BTC', 'ETH', 'USDT'];
export const DOTS_LIST = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
export const TABLE_DATA_LIST = [
  { title: 'Pair', bold: true },
  { title: 'Latest Price', bold: false },
  { title: 'Open', bold: false },
  { title: 'High', bold: false },
  { title: 'Low', bold: false },
  { title: 'Volume', bold: false },
];

export const BASE_NAME = '/Binance/';

export const LOCALSTORAGE_KEY = 'markets';
