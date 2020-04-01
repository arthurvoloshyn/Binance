import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { PATHS, LISTS } from '../../constants';
import {
  setActiveMarket,
  toggleSocketStreams,
  updateMarketPairs,
} from '../../actions';
import { getTickerBySymbol } from '../../utils';
import Loader from '../../components/Loader';
import Table from '../../components/Table';

const { PAIRS_LIST } = LISTS;

export class MarketPairs extends Component {
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
    } = props;

    this.state = {
      isLoaded: marketPairs && market,
    };

    this.streams = ['!miniTicker@arr'];
  }

  componentDidMount() {
    const { connectSocket } = this.props;

    connectSocket && this.connectSocketStreams(this.streams);
  }

  componentWillUnmount() {
    const { connectSocket } = this.props;

    connectSocket && this.disconnectSocketStreams(this.streams);
  }

  switchSocketStreams = () => {
    const { connectSocket } = this.props;

    connectSocket
      ? this.disconnectSocketStreams(this.streams)
      : this.connectSocketStreams(this.streams);
  };

  connectSocketStreams = streams => {
    const { BASE_PATH, STREAM_PATH, STREAM_PARAM } = PATHS;
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
      const BTC = PAIRS_LIST[1];

      updateMarketPairs(ticker);

      !market && this.setActiveTab(BTC);

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

    this[connection].readyState === WebSocket.OPEN && this[connection].close();

    this[connection].onclose = () => {
      const { toggleSocketStreams } = this.props;

      toggleSocketStreams(false);
    };
  };

  setActiveTab = e => {
    const { setActiveMarket } = this.props;

    const market = e.currentTarget ? e.currentTarget.dataset.tab : e;

    const data = {
      market,
    };

    setActiveMarket(data);
  };

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
      <>
        <h2 className="text-center pt-2">
          The World&apos;s Leading Cryptocurrency Exchange
        </h2>

        <div className="d-flex justify-content-center pt-2">
          <button
            className="btn btn-warning"
            onClick={this.switchSocketStreams}
            data-testid="Connect"
          >
            {connectSocket ? 'Disconnect' : 'Connect'}
          </button>
        </div>

        <ul className="nav nav-tabs pt-2" data-testid="NavGrid">
          {PAIRS_LIST.map(pair => {
            const classes = cn('nav-link', { active: market === pair });

            return (
              <li key={pair} className="nav-item">
                <button
                  className={classes}
                  onClick={this.setActiveTab}
                  data-tab={pair}
                >
                  {pair}
                  <span className="d-none d-sm-inline"> Markets</span>
                </button>
              </li>
            );
          })}
        </ul>

        {marketPairs && market && (
          <Table ticker={marketPairs} filter={market} />
        )}
      </>
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
