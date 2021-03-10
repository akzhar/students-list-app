import React from 'react';

import Container from '../container/container.jsx';
import Header from '../header/header.jsx';

const StudentsScreen = () => (
  <div className="page">
    <Header/>
    <main className="page__students">
      <Container>Students page</Container>
    </main>
  </div>
);

export default StudentsScreen;
