import React from 'react';
import PropTypes from 'prop-types';

import {Class} from '../../const.js';

import FavColor from '../fav-color/fav-color.jsx';

const SelectOptionColor = ({option, isActive = false}) => (
  <FavColor
    color={option}
    className={`${Class.SELECT.OPTION}-color ${isActive && `${Class.SELECT.OPTION}-color--active`}`}
  />
);

SelectOptionColor.propTypes = {
  option: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

export default SelectOptionColor;
