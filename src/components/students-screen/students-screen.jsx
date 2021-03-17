import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Container from '../container/container.jsx';
import Header from '../header/header.jsx';
import Menu from '../menu/menu.jsx';
import Students from '../students/students.jsx';
import StudentsEmpty from '../students-empty/students-empty.jsx';

const StudentsScreen = ({hasStudents}) => (
  <React.Fragment>
    <Header/>
    <main>
      <Container>
        <Menu/>
        {hasStudents ? <Students/> : <StudentsEmpty/>}
      </Container>
    </main>
  </React.Fragment>
);

const mapStateToProps = (state) => ({
  hasStudents: state.students.items.length !== 0
});

StudentsScreen.propTypes = {
  hasStudents: PropTypes.bool.isRequired
};

export {StudentsScreen};
export default connect(mapStateToProps, null)(StudentsScreen);
