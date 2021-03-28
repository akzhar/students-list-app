import React from 'react';
import PropTypes from 'prop-types';

const FavColor = ({color}) => (
  <div className={`fav-color fav-color--${color}`} title={color}>
    <span className="visually-hidden">{color}</span>
  </div>
);

FavColor.propTypes = {
  color: PropTypes.string.isRequired
};

export default FavColor;
