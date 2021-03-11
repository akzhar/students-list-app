import React from 'react';

import Container from '../container/container.jsx';
import Header from '../header/header.jsx';
import Navigation from '../navigation/navigation.jsx';
import StudentForm from '../student-form/student-form.jsx';

const NewStudentScreen = () => (
  <React.Fragment>
    <Header/>
    <main>
      <Container>
        <Navigation/>
        <h1>Новый студент</h1>
        <StudentForm/>
      </Container>
    </main>
  </React.Fragment>
);

export default NewStudentScreen;
