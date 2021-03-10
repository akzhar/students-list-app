import React from 'react';

import Container from '../container/container.jsx';
import Header from '../header/header.jsx';
import Menu from '../menu/menu.jsx';
import StudentsList from '../students-list/students-list.jsx';

const StudentsScreen = () => (
  <React.Fragment>
    <Header/>
    <main>
      <Container>
        <Menu/>
        <StudentsList/>
      </Container>
    </main>
  </React.Fragment>
);

export default StudentsScreen;
