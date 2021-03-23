import React from 'react';
import PropTypes from 'prop-types';

const FavColor = ({color, className = ``}) => (
  <div className={`fav-color fav-color--${color} ${className}`} title={color}>
    <span className="visually-hidden">{color}</span>
  </div>
);

FavColor.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default FavColor;
