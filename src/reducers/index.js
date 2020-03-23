import {combineReducers} from 'redux'

import marketPairs from './marketPairs';
import activeMarket from './activeMarket';
import connectSocket from "./connectSocket";

const rootReducer = combineReducers({
    marketPairs,
    activeMarket,
    connectSocket
});

export default rootReducer;
