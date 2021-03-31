import React from 'react';
import PropTypes from 'prop-types';
import {studentTypes} from '../../prop-types/prop-types.jsx';
import {getAgeDeclination} from '../../utils.js';

import FavColor from '../fav-color/fav-color.jsx';
import ButtonDelete from '../button-delete/button-delete.jsx';

const StudentsCard = ({student, onDeleteBtnClick}) => (
  <li className="students__card card">
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
    <ButtonDelete title={`Удалить карточку студента ${student.name}`} value={student.id} onClick={() => onDeleteBtnClick(student.id)}/>
  </li>
);

StudentsCard.propTypes = {
  student: PropTypes.shape(studentTypes).isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired
};

export default StudentsCard;
