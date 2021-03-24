import React from 'react';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.js';

import logo from '../../img/logo.svg';

const Logo = () => {

  const history = useHistory();
  const isDisable = history.location.pathname === AppRoute.MAIN;

  return <div className="logo">
    <img src={logo} alt="logo" width="42" height="42"/>
    <Link
      to={AppRoute.MAIN}
      tabIndex={isDisable ? `-1` : `0`}
      className={`logo__link ${isDisable && `logo__link--disable`}`}
    >
      STUDENTS <span className="logo__author">by <mark className="logo__name">akzhar</mark></span>
    </Link>
  </div>;
};

export default Logo;
