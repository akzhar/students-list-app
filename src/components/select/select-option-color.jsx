import React from 'react';
import PropTypes from 'prop-types';

import {Class} from '../../const.js';

import FavColor from '../fav-color/fav-color.jsx';

const SelectOptionColor = ({option}) => (
  <div className={`${Class.SELECT.OPTION}-color`} data-value={option}>
    <FavColor color={option}/>
  </div>
);

SelectOptionColor.propTypes = {
  option: PropTypes.string.isRequired
};

export default SelectOptionColor;
