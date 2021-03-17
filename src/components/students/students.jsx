import React from 'react';
import PropTypes from 'prop-types';
import {studentTypes} from '../../prop-types/prop-types.jsx';
import {connect} from 'react-redux';
import {SEARCH_BY_FIELD, SortTypeToCompareFunc} from '../../const.js';

import StudentCard from '../student-card/student-card.jsx';

const Students = ({searchSubstring, sortType, students}) => (
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
      {students
      .filter((student) => {
        // регистронезависимый поиск
        const field = student[SEARCH_BY_FIELD].toLowerCase();
        const subString = searchSubstring.toLowerCase();
        return field.indexOf(subString) !== -1;
      })
      .sort(SortTypeToCompareFunc[sortType])
      .map((student) => (
        <StudentCard key={student.id} student={student}/>
      ))}
    </ul>
  </section>
);

const mapStateToProps = (state) => ({
  searchSubstring: state.active.searchSubstring,
  sortType: state.active.sortType,
  students: state.students.items
});

Students.propTypes = {
  searchSubstring: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  students: PropTypes.arrayOf(PropTypes.shape(studentTypes)).isRequired
};

export default connect(mapStateToProps, null)(Students);
