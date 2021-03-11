import React from 'react';
import PropTypes from 'prop-types';
import {studentTypes} from '../../prop-types/prop-types.jsx';
import {connect} from 'react-redux';

import StudentCard from '../student-card/student-card.jsx';

const Students = ({students}) => (
  <section className="students">
    <div className="students__header">
      <span></span>
      <span>ФИО</span>
      <span>Специальность</span>
      <span>Группа</span>
      <span>Возраст</span>
      <span>Рейтинг</span>
      <span></span>
      <span></span>
    </div>
    <ul className="students__list">
      {students.map((student) => (
        <StudentCard key={student.id} student={student}/>
      ))}
    </ul>
  </section>
);

const mapStateToProps = (state) => ({
  students: state.students
});

Students.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape(studentTypes)).isRequired
};

export default connect(mapStateToProps, null)(Students);
