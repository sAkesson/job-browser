import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ handleClick, text }) => {
  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  handleClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};
