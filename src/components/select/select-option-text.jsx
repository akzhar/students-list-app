import React from 'react';
import PropTypes from 'prop-types';

import {Class} from '../../const.js';

const SelectOptionText = ({option}) => (
  <div className={`${Class.SELECT.OPTION}`} data-value={option}>
    {option}
  </div>
);

SelectOptionText.propTypes = {
  option: PropTypes.string.isRequired
};

export default SelectOptionText;
