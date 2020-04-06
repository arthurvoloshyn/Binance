import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { LISTS } from '../../constants';

const { PAIRS_LIST } = LISTS;
const BTC = PAIRS_LIST[1];

const NavItem = ({ onClick, pair, active, className }) => {
  const classes = cn('nav-link', className, { active });

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
  pair: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  className: PropTypes.string,
};

NavItem.defaultProps = {
  pair: BTC,
  onClick: () => {},
  active: false,
  className: '',
};

export default NavItem;
