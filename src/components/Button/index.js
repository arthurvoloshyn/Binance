import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Button = ({ onClick, value, id, className }) => {
  const classes = cn('btn', className);

  return (
    <div className="d-flex justify-content-center pt-2">
      <button className={classes} onClick={onClick} data-testid={id}>
        {value ? 'Disconnect' : 'Connect'}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  value: true,
  id: '',
  className: '',
};

export default Button;
