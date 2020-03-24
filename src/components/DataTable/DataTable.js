import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row';

const DataTable = ({ ticker, filter }) => {
  const tickerArray = Object.values(ticker);

  return (
    <ul className="table">
      <li className="d-none d-md-inline">
        <div className="row table-header small font-weight-bold py-1">
          <div className="col">Pair</div>
          <div className="col">Lastest Price</div>
          <div className="col">Change</div>
          <div className="col">High</div>
          <div className="col">Low</div>
          <div className="col">Volume</div>
        </div>
      </li>
      {tickerArray.map(row =>
        filter.includes(row.symbol) ? <Row key={row.symbol} {...row} /> : null,
      )}
    </ul>
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
