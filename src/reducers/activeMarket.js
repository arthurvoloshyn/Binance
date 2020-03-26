import { ACTION_TYPES } from '../constants';

export const initState = {};

const { SET_ACTIVE_MARKET } = ACTION_TYPES;

const activeMarket = (state = initState, { type, data }) => {
  switch (type) {
    case SET_ACTIVE_MARKET:
      return { ...data };
    default:
      return state;
  }
};

export default activeMarket;
