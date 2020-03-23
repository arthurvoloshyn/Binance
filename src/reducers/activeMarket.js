import {SET_ACTIVE_MARKET} from '../constants';

const initState = {};

const activeMarket = (state = initState, {type, data}) => {
    switch (type) {
        case SET_ACTIVE_MARKET:
            return {...data};
        default:
            return state
    }
};

export default activeMarket;
