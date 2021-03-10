import React from 'react';

import Container from '../container/container.jsx';
import Header from '../header/header.jsx';
import Menu from '../menu/menu.jsx';

const StudentsScreen = () => (
  <React.Fragment>
    <Header/>
    <main>
      <Container>
        <Menu/>
      </Container>
    </main>
  </React.Fragment>
);

export default StudentsScreen;
