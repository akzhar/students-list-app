import React from 'react';
import PropTypes from 'prop-types';

const ButtonDelete = ({title, value, onClick}) => (
  <button
    className="btn-delete"
    title={title}
    value={value}
    onClick={onClick}
  >
    <span className="visually-hidden">{title}</span>
  </button>
);

ButtonDelete.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ButtonDelete;
