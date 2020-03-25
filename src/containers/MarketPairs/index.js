import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
  BASE_PATH,
  STREAM_PARAM,
  STREAM_PATH,
  PAIRS_LIST,
} from '../../constants';
import {
  setActiveMarket,
  toggleSocketStreams,
  updateMarketPairs,
} from '../../actions';
import { getTickerBySymbol } from '../../utils';
import Loader from '../../components/Loader';
import Table from '../../components/Table';

class MarketPairs extends Component {
  static propTypes = {
    marketPairs: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
    activeMarket: PropTypes.shape({
      market: PropTypes.string,
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
    const {
      marketPairs,
      activeMarket: { market },
    } = this.props;

    this.state = {
      isLoaded: marketPairs && market,
    };

    this.streams = ['!miniTicker@arr'];
  }

  setActiveTab = e => {
    const { setActiveMarket } = this.props;

    const market = e.currentTarget
      ? e.currentTarget.getAttribute('data-tab')
      : e;

    const data = {
      market,
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
    const joinedStreams = streams.join('/');
    const connection = btoa(joinedStreams);

    this[connection] = new WebSocket(
      `${BASE_PATH}${STREAM_PATH}?${STREAM_PARAM}${joinedStreams}`,
    );

    this[connection].onopen = () => {
      const { toggleSocketStreams } = this.props;

      toggleSocketStreams(true);
    };

    this[connection].onmessage = ({ data = {} }) => {
      const {
        updateMarketPairs,
        activeMarket: { market },
      } = this.props;
      const ticker = getTickerBySymbol(JSON.parse(data).data) || {};
      updateMarketPairs(ticker);

      !market && this.setActiveTab('BTC');

      this.setState({
        isLoaded: true,
      });
    };

    this[connection].onerror = evt => {
      console.error(evt); // eslint-disable-line
    };
  };

  disconnectSocketStreams = streams => {
    const joinedStreams = streams.join('/');
    const connection = btoa(joinedStreams);

    if (this[connection].readyState === WebSocket.OPEN) {
      this[connection].close();
    }

    this[connection].onclose = () => {
      const { toggleSocketStreams } = this.props;

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
    const {
      activeMarket: { market },
      marketPairs,
      connectSocket,
    } = this.props;

    if (error) {
      return <div className="alert alert-danger">{error.message}</div>;
    }

    if (!isLoaded) {
      return <Loader />;
    }

    return (
      <Fragment>
        <button
          type="button"
          className="btn btn-warning"
          onClick={this.switchSocketStreams}
        >
          {connectSocket ? 'Close' : 'Connect'}
        </button>

        <ul className="nav nav-tabs pt-2">
          {PAIRS_LIST.map(pair => (
            <li key={pair} className="nav-item">
              <button
                className={cn('nav-link', {
                  active: market === pair,
                })}
                onClick={this.setActiveTab}
                data-tab={pair}
              >
                {pair}
                <span className="d-none d-sm-inline"> Markets</span>
              </button>
            </li>
          ))}
        </ul>

        {marketPairs && market && (
          <Table ticker={marketPairs} filter={market} />
        )}
      </Fragment>
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
