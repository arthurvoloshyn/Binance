import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Row';

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
