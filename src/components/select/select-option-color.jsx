import React from 'react';
import PropTypes from 'prop-types';

import FavColor from '../fav-color/fav-color.jsx';

const SelectOptionColor = ({option, isActive = false}) => (
  <FavColor color={option} className={`select__option-color ${isActive && `select__option-color--active`}`}/>
);

SelectOptionColor.propTypes = {
  option: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

export default SelectOptionColor;
