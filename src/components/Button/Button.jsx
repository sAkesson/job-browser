import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ handleClick, label }) => {
  return (
    <button type="button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  handleClick: PropTypes.func,
  label: PropTypes.string.isRequired,
};
