import React from 'react';
import PropTypes from 'prop-types';
import { LISTS } from '../../constants';
import Row from '../Row';

const { TABLE_DATA_LIST, PAIRS_LIST } = LISTS;
const BTC = PAIRS_LIST[1];

const Table = ({ ticker, filter }) => {
  const tickerArray = Object.values(ticker);

  return (
    <ul className="table">
      <li className="d-none d-md-inline">
        <div className="row table-header small py-1">
          {TABLE_DATA_LIST.map(({ title }) => (
            <div key={title} className="col">
              <h2 className="title font-weight-bold mb-0">{title}</h2>
            </div>
          ))}
        </div>
      </li>

      {tickerArray.map(row =>
        row.symbol.endsWith(filter) ? <Row key={row.symbol} {...row} /> : null,
      )}
    </ul>
  );
};

Table.propTypes = {
  ticker: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
  filter: PropTypes.string,
};

Table.defaultProps = {
  ticker: {},
  filter: BTC,
};

export default Table;
