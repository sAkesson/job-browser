import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

const Tag = ({ text }) => {
  return <div className="tag">{text}</div>;
};

export default Tag;

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};
