import React from 'react';
import PropTypes from 'prop-types';
import {studentTypes} from '../../prop-types/prop-types.jsx';
import {connect} from 'react-redux';
import {ActiveSortToCompareFunc} from '../../const.js';

import StudentCard from '../student-card/student-card.jsx';

const Students = ({activeSearch, activeSort, students}) => (
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
      {students.sort(ActiveSortToCompareFunc[activeSort]).map((student) => (
        <StudentCard key={student.id} student={student}/>
      ))}
    </ul>
  </section>
);

const mapStateToProps = (state) => ({
  activeSearch: state.activeSearch,
  activeSort: state.activeSort,
  students: state.students
});

Students.propTypes = {
  activeSearch: PropTypes.string.isRequired,
  activeSort: PropTypes.string.isRequired,
  students: PropTypes.arrayOf(PropTypes.shape(studentTypes)).isRequired
};

export default connect(mapStateToProps, null)(Students);
