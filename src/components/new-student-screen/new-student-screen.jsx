import React from 'react';

import Container from '../container/container.jsx';
import Header from '../header/header.jsx';

const NewStudentScreen = () => (
  <React.Fragment>
    <Header/>
    <main>
      <Container>New student page</Container>
    </main>
  </React.Fragment>
);

NewStudentScreen.propTypes = {};

export default NewStudentScreen;
