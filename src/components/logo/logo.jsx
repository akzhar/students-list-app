import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../img/logo.svg';

const Logo = () => (
  <div className="logo">
    <img src={logo} alt="logo" width="42" height="42"/>
    <Link to="/">
      STUDENTS by <span>akzhar</span>
    </Link>
  </div>
);

export default Logo;
