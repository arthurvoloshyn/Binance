export const ACTION_TYPES = {
  UPDATE_MARKET_PAIRS: 'UPDATE_MARKET_PAIRS',
  SET_ACTIVE_MARKET: 'SET_ACTIVE_MARKET',
  TOGGLE_SOCKET_STREAMS: 'TOGGLE_SOCKET_STREAMS',
};

export const PATHS = {
  BASE_PATH: 'wss://stream.binance.com',
  STREAM_PATH: '/stream',
  STREAM_PARAM: 'streams=',
};

export const LISTS = {
  PAIRS_LIST: ['BNB', 'BTC', 'ETH', 'USDT'],
  DOTS_LIST: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  TABLE_DATA_LIST: [
    { title: 'Pair' },
    { title: 'Latest Price' },
    { title: 'Open' },
    { title: 'High' },
    { title: 'Low' },
    { title: 'Volume' },
  ],
};

export const CONFIG = {
  BASE_NAME: '/Binance/',
  LOCALSTORAGE_KEY: 'markets',
};
