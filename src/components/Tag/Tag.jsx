import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

const Tag = ({ children }) => {
  return <div className="tag">{children}</div>;
};

export default Tag;

Tag.propTypes = {
  children: PropTypes.node.isRequired,
};
