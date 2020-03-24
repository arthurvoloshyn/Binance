import React from 'react';
import PropTypes from 'prop-types';
import { TABLE_DATA_LIST } from '../../constants';
import Row from '../Row';

const Table = ({ ticker, filter }) => {
  const tickerArray = Object.values(ticker);

  return (
    <ul className="table">
      <li className="d-none d-md-inline">
        <div className="row table-header small font-weight-bold py-1">
          {TABLE_DATA_LIST.map(({ title }) => (
            <div key={title} className="col">
              {title}
            </div>
          ))}
        </div>
      </li>
      {tickerArray.map(row =>
        filter.includes(row.symbol) ? <Row key={row.symbol} {...row} /> : null,
      )}
    </ul>
  );
};

Table.propTypes = {
  ticker: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
  filter: PropTypes.arrayOf(PropTypes.string),
};

Table.defaultProps = {
  ticker: {},
  filter: [],
};

export default Table;
