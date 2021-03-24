import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions.js';
import {studentTypes} from '../../prop-types/prop-types.jsx';
import {getAgeDeclination} from '../../utils.js';
import {Message} from '../../const.js';

import FavColor from '../fav-color/fav-color.jsx';
import ButtonDelete from '../button-delete/button-delete.jsx';

const StudentsCard = ({student, showPopup, removeStudent}) => {

  const cardRef = useRef();

  const handleDeleteBtnClick = (evt) => {
    const card = cardRef.current;
    const studentId = evt.target.value;
    const onSuccess = () => {
      card.parentNode.removeChild(card);
      showPopup(Message.OK.CARD_WAS_REMOVED);
    };
    const onFail = () => showPopup(Message.ERROR.CARD_WAS_NOT_REMOVED);
    removeStudent(studentId, onSuccess, onFail);
  };

  return <li className="students__card card" ref={cardRef}>
    <img className="card__avatar" src={student.avatar} alt={student.name} width="40" height="40"/>
    <div className="card__col-center">
      <p className="card__name">{student.name}</p>
      <div className="card__wrapper">
        <FavColor color={student.favcolor}/>
        <p className="card__rating">{student.rating}</p>
      </div>
      <p className="card__age">{student.age} <span> {getAgeDeclination(student.age)}</span></p>
      <p className="card__spec">{student.spec}</p>
      <p className="card__group">{student.group}</p>
    </div>
    <ButtonDelete title={`Удалить карточку студента ${student.name}`} value={student.id} onClick={handleDeleteBtnClick}/>
  </li>;
};

const mapDispatchToProps = (dispatch) => ({
  showPopup: (message) => dispatch(ActionCreator.showPopup(message)),
  removeStudent: (studentId, onSuccess, onFail) => dispatch(ActionCreator.removeStudent(studentId, onSuccess, onFail))
});

StudentsCard.propTypes = {
  student: PropTypes.shape(studentTypes).isRequired,
  showPopup: PropTypes.func.isRequired,
  removeStudent: PropTypes.func.isRequired
};

export {StudentsCard};
export default connect(null, mapDispatchToProps)(StudentsCard);
