import React from 'react';
import {Link} from 'react-router-dom';

import Container from '../container/container.jsx';
import Header from '../header/header.jsx';

const NotFoundScreen = () => (
  <div className="page">
    <Header/>
    <main className="page__students">
      <Container>
        <p>404 - такой страницы не существует</p>
        <Link to="/">Вернуться на главную</Link>
      </Container>
    </main>
  </div>
);

export default NotFoundScreen;
