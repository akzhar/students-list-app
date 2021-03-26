import React from 'react';
import PropTypes from 'prop-types';

import {Class} from '../../const.js';

const SelectOptionText = ({option, isActive = false}) => (
  <div className={`${Class.SELECT.OPTION} ${isActive && `${Class.SELECT.OPTION}--active`}`}>
    {option}
  </div>
);

SelectOptionText.propTypes = {
  option: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

export default SelectOptionText;
