import { ACTION_TYPES } from '../constants';

export const initState = {};

const { UPDATE_MARKET_PAIRS } = ACTION_TYPES;

const marketPairs = (state = initState, { type, data }) => {
  switch (type) {
    case UPDATE_MARKET_PAIRS:
      return { ...state, ...data };
    default:
      return state;
  }
};

export default marketPairs;
