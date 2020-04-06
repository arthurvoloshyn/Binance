import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { LISTS } from '../../constants';

const { PAIRS_LIST } = LISTS;
const BTC = PAIRS_LIST[1];

const NavItem = ({ onClick, pair, market, className }) => {
  const classes = cn('nav-link', className, { active: market === pair });

  return (
    <li className="nav-item">
      <button className={classes} onClick={onClick} data-tab={pair}>
        {pair}
        <span className="d-none d-sm-inline"> Markets</span>
      </button>
    </li>
  );
};

NavItem.propTypes = {
  onClick: PropTypes.func,
  pair: PropTypes.string.isRequired,
  market: PropTypes.string,
  className: PropTypes.string,
};

NavItem.defaultProps = {
  onClick: () => {},
  market: BTC,
  className: '',
};

export default NavItem;
