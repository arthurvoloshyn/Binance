import React from 'react';
import PropTypes from 'prop-types';
import BigNumber from 'bignumber.js';

const Row = ({
  symbol,
  lastPrice,
  priceChangePercent,
  highPrice,
  lowPrice,
  quoteVolume,
}) => (
  <React.Fragment>
    <div className="d-none d-sm-inline">
      <div className="row table-row small py-1">
        <div className="col">{symbol}</div>
        <div className="col">{new BigNumber(lastPrice).toFormat(null, 1)}</div>
        <div
          className={
            priceChangePercent < 0 ? 'col text-danger' : 'col text-success'
          }
        >{`${new BigNumber(priceChangePercent).toFormat(2, 1)}%`}</div>
        <div className="col">{new BigNumber(highPrice).toFormat(null, 1)}</div>
        <div className="col">{new BigNumber(lowPrice).toFormat(null, 1)}</div>
        <div className="col">
          {new BigNumber(quoteVolume).toFormat(null, 1)}
        </div>
      </div>
    </div>
    <div className="d-inline d-sm-none">
      <div className="row table-row small py-1">
        <div className="col-12">
          <span className="font-weight-bold">{symbol}</span>
          <span>{new BigNumber(lastPrice).toFormat(null, 1)}</span>{' '}
          <span
            className={priceChangePercent < 0 ? 'text-danger' : 'text-success'}
          >{`${new BigNumber(priceChangePercent).toFormat(2, 1)}%`}</span>
        </div>
        <div className="col-4">
          <div className="font-weight-light text-muted small">24h High</div>
          <span className="small">
            {new BigNumber(highPrice).toFormat(null, 1)}
          </span>
        </div>
        <div className="col-4">
          <div className="font-weight-light text-muted small">24h Low</div>
          <span className="small">
            {new BigNumber(lowPrice).toFormat(null, 1)}
          </span>
        </div>
        <div className="col-4">
          <div className="font-weight-light text-muted small">24h Volume</div>
          <span className="small">
            {new BigNumber(quoteVolume).toFormat(null, 1)}
          </span>
        </div>
      </div>
    </div>
  </React.Fragment>
);

Row.propTypes = {
  symbol: PropTypes.string,
  lastPrice: PropTypes.string,
  priceChangePercent: PropTypes.string,
  highPrice: PropTypes.string,
  lowPrice: PropTypes.string,
  quoteVolume: PropTypes.string,
};

Row.defaultProps = {
  symbol: '',
  lastPrice: '',
  priceChangePercent: '',
  highPrice: '',
  lowPrice: '',
  quoteVolume: '',
};

const DataTable = ({ ticker, filter }) => {
  const rows = [];
  const tickerArray = Object.values(ticker);

  tickerArray.forEach(row => {
    if (filter.includes(row.symbol)) {
      rows.push(<Row {...row} key={row.symbol} />);
    }
  });

  return (
    <React.Fragment>
      <div className="d-none d-sm-inline">
        <div className="row table-header small font-weight-bold py-1">
          <div className="col">Pair</div>
          <div className="col">Last Price</div>
          <div className="col">Change</div>
          <div className="col">High</div>
          <div className="col">Low</div>
          <div className="col">Volume</div>
        </div>
      </div>
      {rows}
    </React.Fragment>
  );
};

DataTable.propTypes = {
  ticker: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
  filter: PropTypes.arrayOf(PropTypes.string),
};

DataTable.defaultProps = {
  ticker: {},
  filter: [],
};

export default DataTable;
