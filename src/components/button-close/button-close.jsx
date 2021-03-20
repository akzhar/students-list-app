import React from 'react';
import PropTypes from 'prop-types';

const ButtonClose = ({title, onClick}) => (
  <button
    className="btn-close"
    title={title}
    onClick={onClick}
    aria-label={title}
  >
    <span className="visually-hidden">{title}</span>
  </button>
);

ButtonClose.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ButtonClose;
