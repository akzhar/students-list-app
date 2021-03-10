import React from 'react';
import {Link} from 'react-router-dom';

import Container from '../container/container.jsx';

const Header = () => (
  <header className="page__header">
    <Container>
      <img className="logo" src="./img/logo.svg" width="42" height="42"/>
      <Link to="/">
        <b>STUDENTS</b> <small><span>by</span> akzhar</small>
      </Link>
    </Container>
  </header>
);

export default Header;
