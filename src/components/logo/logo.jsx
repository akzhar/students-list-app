import React from 'react';
import {Link} from 'react-router-dom';

const Logo = () => (
  <div className="logo">
    <img src="./img/logo.svg" width="42" height="42"/>
    <Link to="/">
      STUDENTS by <span>akzhar</span>
    </Link>
  </div>
);

export default Logo;
