import React from 'react';
import PropTypes from 'prop-types';
import {studentTypes} from '../../prop-types/prop-types.jsx';
import {connect} from 'react-redux';

import StudentCard from '../student-card/student-card.jsx';

const StudentsList = ({students}) => (
  <ul className="students-list">
    {students.map((student) => (
      <StudentCard key={student.id} student={student}/>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  students: state.students
});

StudentsList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape(studentTypes)).isRequired
};

export default connect(mapStateToProps, null)(StudentsList);
