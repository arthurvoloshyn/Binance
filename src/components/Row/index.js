import React from 'react';
import PropTypes from 'prop-types';
import BigNumber from 'bignumber.js';

const Row = ({
  symbol,
  latestPrice,
  priceChangePercent,
  highPrice,
  lowPrice,
  quoteVolume,
  openPrice,
}) => (
  <li className="table-item">
    <article className="d-none d-md-inline">
      <div className="row table-row small py-1">
        <div className="col">{symbol}</div>
        <div className="col">
          {new BigNumber(latestPrice).toFormat(null, 1)}
        </div>
        <div className="col">{new BigNumber(openPrice).toFormat(null, 1)}</div>
        <div className="col">{new BigNumber(highPrice).toFormat(null, 1)}</div>
        <div className="col">{new BigNumber(lowPrice).toFormat(null, 1)}</div>
        <div className="col"></div>
      </div>
    </article>

    <article className="d-inline d-md-none">
      <div className="row table-row small py-1">
        <div className="col-4">
          <div className="font-weight-light text-muted small">Pair</div>
          <span className="font-weight-bold">{symbol}</span>
        </div>
        <div className="col-4">
          <div className="font-weight-light text-muted small">
            Lastest Price
          </div>
          <span>{new BigNumber(latestPrice).toFormat(null, 1)}</span>
        </div>
        <div className="col-4">
          <div className="font-weight-light text-muted small">Change</div>
          <span
            className={priceChangePercent < 0 ? 'text-danger' : 'text-success'}
          >{`${new BigNumber(priceChangePercent).toFormat(2, 1)}%`}</span>
        </div>
        <div className="col-4">
          <div className="font-weight-light text-muted small">High</div>
          <span className="small">
            {new BigNumber(highPrice).toFormat(null, 1)}
          </span>
        </div>
        <div className="col-4">
          <div className="font-weight-light text-muted small">Low</div>
          <span className="small">
            {new BigNumber(lowPrice).toFormat(null, 1)}
          </span>
        </div>
        <div className="col-4">
          <div className="font-weight-light text-muted small">Volume</div>
          <span className="small">
            {new BigNumber(quoteVolume).toFormat(null, 1)}
          </span>
        </div>
      </div>
    </article>
  </li>
);

Row.propTypes = {
  symbol: PropTypes.string,
  latestPrice: PropTypes.string,
  priceChangePercent: PropTypes.string,
  highPrice: PropTypes.string,
  lowPrice: PropTypes.string,
  quoteVolume: PropTypes.string,
  openPrice: PropTypes.string,
};

Row.defaultProps = {
  symbol: '',
  latestPrice: '',
  priceChangePercent: '',
  highPrice: '',
  lowPrice: '',
  quoteVolume: '',
  openPrice: '',
};

export default Row;
