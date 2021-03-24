import React from 'react';
import PropTypes from 'prop-types';

const SelectOptionText = ({option, isActive = false}) => (
  <div className={`select__option ${isActive && `select__option--active`}`}>
    {option}
  </div>
);

SelectOptionText.propTypes = {
  option: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

export default SelectOptionText;
