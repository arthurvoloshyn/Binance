import React from 'react';
import PropTypes from 'prop-types';
import { getTableDataListWithValues } from '../../utils';

const Row = ({
  symbol,
  latestPrice,
  highPrice,
  lowPrice,
  quoteVolume,
  openPrice,
}) => {
  const tableDataList = getTableDataListWithValues(
    symbol,
    latestPrice,
    highPrice,
    lowPrice,
    quoteVolume,
    openPrice,
  );

  return (
    <li className="table-item">
      <article className="d-none d-md-inline">
        <div className="row table-row small py-1">
          {tableDataList.map(({ title, value }) => (
            <div key={title} className="col">
              {value}
            </div>
          ))}
        </div>
      </article>

      <article className="d-inline d-md-none">
        <div className="row table-row small py-1">
          {tableDataList.map(({ title, value, bold }) => (
            <div key={title} className="col-4">
              <div className="font-weight-light text-muted small">{title}</div>

              <span className={bold ? 'font-weight-bold' : 'small'}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </article>
    </li>
  );
};

Row.propTypes = {
  symbol: PropTypes.string,
  latestPrice: PropTypes.string,
  highPrice: PropTypes.string,
  lowPrice: PropTypes.string,
  quoteVolume: PropTypes.string,
  openPrice: PropTypes.string,
};

Row.defaultProps = {
  symbol: '',
  latestPrice: '',
  highPrice: '',
  lowPrice: '',
  quoteVolume: '',
  openPrice: '',
};

export default Row;
