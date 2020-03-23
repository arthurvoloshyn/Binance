import React, {Component} from 'react'
import {connect} from 'react-redux'

import {BASE_PATH, STREAM_PARAM, STREAM_PATH} from '../../constants';

import {setActiveMarket, toggleSocketStreams, updateMarketPairs} from '../../actions';

import Loading from '../../components/loader/Loading'

import DataTable from '../../components/DataTable/DataTable'

class MarketPairs extends Component {
    constructor(props) {
        super(props);

        const {marketPairs, activeMarket} = this.props;

        this.state = {
            isLoaded: marketPairs && activeMarket.filtered_pairs
        };

        this.streams = ['!miniTicker@arr'];
    }

    getTickerBySymbol = data => {
        let ticker = {};
        data.forEach(item => {
            let symbol = item.symbol || item.s;
            ticker[symbol] = {
                symbol: symbol,
                lastPrice: item.lastPrice || item.c,
                priceChange: item.priceChange || item.p,
                priceChangePercent: item.priceChangePercent || item.P,
                highPrice: item.highPrice || item.h,
                lowPrice: item.lowPrice || item.l,
                quoteVolume: item.quoteVolume || item.q,
            }
        });
        return ticker;
    };

    setActiveTab = e => {
        let market = e.currentTarget ? e.currentTarget.getAttribute('data-tab') : e;
        const data = {
            filtered_pairs: Object.keys(this.props.marketPairs).filter(item => item.endsWith(market)),
            market: market
        };
        this.props.setActiveMarket(data);
    };

    switchSocketStreams = () => {
        const {connectSocket} = this.props;

        connectSocket ? this.disconnectSocketStreams(this.streams) : this.connectSocketStreams(this.streams);
    };

    connectSocketStreams = streams => {
        const {toggleSocketStreams} = this.props;
        streams = streams.join('/');
        let connection = btoa(streams);
        this[connection] = new WebSocket(`${BASE_PATH}${STREAM_PATH}?${STREAM_PARAM}${streams}`);

        this[connection].onopen = () => {
            toggleSocketStreams(true);
        };

        this[connection].onmessage = ({data}) => {
            let ticker = this.getTickerBySymbol(JSON.parse(data).data);
            this.props.updateMarketPairs(ticker);
            !this.props.activeMarket.market && this.setActiveTab('BTC');
            this.setState({
                isLoaded: true
            })
        };

        this[connection].onerror = evt => {
            console.error(evt);
        };
    };

    disconnectSocketStreams = streams => {
        const {toggleSocketStreams} = this.props;
        streams = streams.join('/');
        let connection = btoa(streams);
        if (this[connection].readyState === WebSocket.OPEN) {
            this[connection].close();
        }

        this[connection].onclose = () => {
            toggleSocketStreams(false);
        };
    };

    componentDidMount() {
        const {connectSocket} = this.props;

        if (connectSocket) {
            this.connectSocketStreams(this.streams);
        }
    }

    componentWillUnmount() {
        this.disconnectSocketStreams(this.streams);
    }

    render() {
        const {error, isLoaded} = this.state;
        const {activeMarket, marketPairs, connectSocket} = this.props;

        if (error) {
            return <div className="alert alert-danger">{error.message}</div>;
        }
        if (!isLoaded) {
            return <Loading/>;
        }
        return (
            <React.Fragment>
                <button type="button" className="btn btn-warning"
                        onClick={this.switchSocketStreams}>{connectSocket ? 'Close' : 'Connect'}</button>

                <ul className="nav nav-tabs pt-2">
                    <li className="nav-item">
                        <button className={activeMarket.market === 'BNB' ? 'nav-link active' : 'nav-link'}
                           onClick={this.setActiveTab} data-tab="BNB">BNB<span
                            className="d-none d-sm-inline"> Markets</span>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={activeMarket.market === 'BTC' ? 'nav-link active' : 'nav-link'}
                           onClick={this.setActiveTab} data-tab="BTC">BTC<span
                            className="d-none d-sm-inline"> Markets</span></button>
                    </li>
                    <li className="nav-item">
                        <button className={activeMarket.market === 'ETH' ? 'nav-link active' : 'nav-link'}
                           onClick={this.setActiveTab} data-tab="ETH">ETH<span
                            className="d-none d-sm-inline"> Markets</span></button>
                    </li>
                    <li className="nav-item">
                        <button className={activeMarket.market === 'USDT' ? 'nav-link active' : 'nav-link'}
                           onClick={this.setActiveTab} data-tab="USDT">USDT<span
                            className="d-none d-sm-inline"> Markets</span></button>
                    </li>
                </ul>
                {marketPairs && activeMarket.filtered_pairs ?
                    <DataTable ticker={marketPairs} filter={activeMarket.filtered_pairs}/> :
                    <Loading/>}
            </React.Fragment>
        )
    }

}

export default connect(
    ({marketPairs, activeMarket, connectSocket}) => ({marketPairs, activeMarket, connectSocket}), {
        setActiveMarket,
        updateMarketPairs,
        toggleSocketStreams
    }
)(MarketPairs)
