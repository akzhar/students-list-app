import React from 'react';

import Container from '../container/container.jsx';
import Header from '../header/header.jsx';

const NewStudentScreen = () => (
  <div className="page">
    <Header/>
    <main className="page__students">
      <Container>New student page</Container>
    </main>
  </div>
);

NewStudentScreen.propTypes = {};

export default NewStudentScreen;
