import {UPDATE_MARKET_PAIRS} from '../constants';

const initState = {};

const marketPairs = (state = initState, {type, data}) => {
    switch (type) {
        case UPDATE_MARKET_PAIRS:
            return {...state, ...data};
        default:
            return state
    }
};

export default marketPairs;
