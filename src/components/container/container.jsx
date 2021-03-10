import React from 'react';
import PropTypes from 'prop-types';

import './container.styl';

const Container = ({children}) => (
  <div className="container">
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.any.isRequired
};

export default Container;
