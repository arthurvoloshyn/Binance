import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BASE_PATH, STREAM_PARAM, STREAM_PATH } from '../../constants';
import {
  setActiveMarket,
  toggleSocketStreams,
  updateMarketPairs,
} from '../../actions';
import Loader from '../../components/Loader';
import DataTable from '../../components/DataTable';

class MarketPairs extends Component {
  static propTypes = {
    marketPairs: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
    activeMarket: PropTypes.shape({
      market: PropTypes.string,
      filtered_pairs: PropTypes.arrayOf(PropTypes.string),
    }),
    connectSocket: PropTypes.bool,
    setActiveMarket: PropTypes.func,
    updateMarketPairs: PropTypes.func,
    toggleSocketStreams: PropTypes.func,
  };

  static defaultProps = {
    marketPairs: {},
    activeMarket: {},
    connectSocket: true,
    setActiveMarket: () => {},
    updateMarketPairs: () => {},
    toggleSocketStreams: () => {},
  };

  constructor(props) {
    super(props);

    const { marketPairs, activeMarket } = this.props;

    this.state = {
      isLoaded: marketPairs && activeMarket.filtered_pairs,
    };

    this.streams = ['!miniTicker@arr'];
  }

  getTickerBySymbol = data => {
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

  setActiveTab = e => {
    const { marketPairs, setActiveMarket } = this.props;
    const market = e.currentTarget
      ? e.currentTarget.getAttribute('data-tab')
      : e;
    const data = {
      filtered_pairs: Object.keys(marketPairs).filter(item =>
        item.endsWith(market),
      ),
      market: market,
    };
    setActiveMarket(data);
  };

  switchSocketStreams = () => {
    const { connectSocket } = this.props;

    connectSocket
      ? this.disconnectSocketStreams(this.streams)
      : this.connectSocketStreams(this.streams);
  };

  connectSocketStreams = streams => {
    const { toggleSocketStreams, updateMarketPairs, activeMarket } = this.props;
    streams = streams.join('/');
    const connection = btoa(streams);
    this[connection] = new WebSocket(
      `${BASE_PATH}${STREAM_PATH}?${STREAM_PARAM}${streams}`,
    );

    this[connection].onopen = () => {
      toggleSocketStreams(true);
    };

    this[connection].onmessage = ({ data }) => {
      const ticker = this.getTickerBySymbol(JSON.parse(data).data);
      updateMarketPairs(ticker);
      !activeMarket.market && this.setActiveTab('BTC');
      this.setState({
        isLoaded: true,
      });
    };

    this[connection].onerror = evt => {
      console.error(evt); // eslint-disable-line
    };
  };

  disconnectSocketStreams = streams => {
    const { toggleSocketStreams } = this.props;
    streams = streams.join('/');
    const connection = btoa(streams);
    if (this[connection].readyState === WebSocket.OPEN) {
      this[connection].close();
    }

    this[connection].onclose = () => {
      toggleSocketStreams(false);
    };
  };

  componentDidMount() {
    const { connectSocket } = this.props;

    if (connectSocket) {
      this.connectSocketStreams(this.streams);
    }
  }

  componentWillUnmount() {
    const { connectSocket } = this.props;

    if (connectSocket) {
      this.disconnectSocketStreams(this.streams);
    }
  }

  render() {
    const { error, isLoaded } = this.state;
    const { activeMarket, marketPairs, connectSocket } = this.props;

    if (error) {
      return <div className="alert alert-danger">{error.message}</div>;
    }
    if (!isLoaded) {
      return <Loader />;
    }
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-warning"
          onClick={this.switchSocketStreams}
        >
          {connectSocket ? 'Close' : 'Connect'}
        </button>

        <ul className="nav nav-tabs pt-2">
          <li className="nav-item">
            <button
              className={
                activeMarket.market === 'BNB' ? 'nav-link active' : 'nav-link'
              }
              onClick={this.setActiveTab}
              data-tab="BNB"
            >
              BNB<span className="d-none d-sm-inline"> Markets</span>
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                activeMarket.market === 'BTC' ? 'nav-link active' : 'nav-link'
              }
              onClick={this.setActiveTab}
              data-tab="BTC"
            >
              BTC<span className="d-none d-sm-inline"> Markets</span>
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                activeMarket.market === 'ETH' ? 'nav-link active' : 'nav-link'
              }
              onClick={this.setActiveTab}
              data-tab="ETH"
            >
              ETH<span className="d-none d-sm-inline"> Markets</span>
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                activeMarket.market === 'USDT' ? 'nav-link active' : 'nav-link'
              }
              onClick={this.setActiveTab}
              data-tab="USDT"
            >
              USDT<span className="d-none d-sm-inline"> Markets</span>
            </button>
          </li>
        </ul>
        {marketPairs && activeMarket.filtered_pairs ? (
          <DataTable
            ticker={marketPairs}
            filter={activeMarket.filtered_pairs}
          />
        ) : (
          <Loader />
        )}
      </React.Fragment>
    );
  }
}

export default connect(
  ({ marketPairs, activeMarket, connectSocket }) => ({
    marketPairs,
    activeMarket,
    connectSocket,
  }),
  {
    setActiveMarket,
    updateMarketPairs,
    toggleSocketStreams,
  },
)(MarketPairs);
