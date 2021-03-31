import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {studentTypes} from '../../prop-types/prop-types.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions.js';
import {SEARCH_BY_FIELD, SortTypeToCompareFunc, Message} from '../../const.js';

import StudentCard from '../student-card/student-card.jsx';

const Students = ({searchSubstring, sortType, students, showPopup, removeStudent}) => {

  const [studentCards, setStudentCards] = useState([...students]);

  const handleDeleteBtnClick = (studentId) => {
    const onSuccess = () => {
      setStudentCards((cards) => cards.filter((card) => card.id !== studentId));
      showPopup(Message.OK.CARD_WAS_REMOVED);
    };
    const onFail = () => showPopup(Message.ERROR.CARD_WAS_NOT_REMOVED);
    removeStudent(studentId, onSuccess, onFail);
  };

  return <section className="students">
    <div className="students__header">
      <span>ФИО</span>
      <span>Специальность</span>
      <span>Группа</span>
      <span>Возраст</span>
      <span>Рейтинг</span>
    </div>
    <ul className="students__list">
      {studentCards
      .filter((student) => {
        // регистронезависимый поиск
        const fieldValue = student[SEARCH_BY_FIELD].toLowerCase();
        const subString = searchSubstring.toLowerCase();
        return fieldValue.indexOf(subString) !== -1;
      })
      .sort(SortTypeToCompareFunc[sortType])
      .map((student) => (
        <StudentCard key={student.id + student.name + student.age} student={student} onDeleteBtnClick={handleDeleteBtnClick}/>
      ))}
    </ul>
  </section>;
};

const mapStateToProps = (state) => ({
  searchSubstring: state.active.searchSubstring,
  sortType: state.active.sortType,
  students: state.students.items
});

const mapDispatchToProps = (dispatch) => ({
  showPopup: (message) => dispatch(ActionCreator.showPopup(message)),
  removeStudent: (studentId, onSuccess, onFail) => dispatch(ActionCreator.removeStudent(studentId, onSuccess, onFail))
});

Students.propTypes = {
  searchSubstring: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  students: PropTypes.arrayOf(PropTypes.shape(studentTypes)).isRequired,
  showPopup: PropTypes.func.isRequired,
  removeStudent: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);
