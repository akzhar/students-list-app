import React from 'react';
import PropTypes from 'prop-types';
import {studentTypes} from '../../prop-types/prop-types.jsx';

const StudentsCard = ({student}) => (
  <li className="students__card card">
    <img className="card__avatar" src={student.avatar} alt={student.name} width="40" height="40"/>
    <span className="card__name">{student.name}</span>
    <span className="card__spec">{student.specialization}</span>
    <span className="card__group">{student.group}</span>
    <span className="card__age">{student.age}</span>
    <span className="card__rating">{student.rating}</span>
    <div className={`card__fav-color card__fav-color--${student.favoriteColor}`} title={student.favoriteColor}>
      <span className="visually-hidden">{student.favoriteColor}</span>
    </div>
    <button className="card__delete-btn">
      <span className="visually-hidden">Delete student</span>
    </button>
  </li>
);

StudentsCard.propTypes = {
  student: PropTypes.shape(studentTypes).isRequired
};

export default StudentsCard;
