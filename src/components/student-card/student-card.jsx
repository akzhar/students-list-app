import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {studentTypes} from '../../prop-types/prop-types.jsx';

import FavColor from '../fav-color/fav-color.jsx';

const StudentsCard = ({student}) => {

  const cardRef = useRef();

  const handleDeleteBtnClick = () => {
    // TODO: dispatch student.id removal

    // const card = cardRef.current;
    // card.parentNode.removeChild(card);
  };

  return <li className="students__card card" ref={cardRef}>
    <img className="card__avatar" src={student.avatar} alt={student.name} width="40" height="40"/>
    <span className="card__name">{student.name}</span>
    <span className="card__spec">{student.specialization}</span>
    <span className="card__group">{student.group}</span>
    <span className="card__age">{student.age}</span>
    <span className="card__rating">{student.rating}</span>
    <FavColor color={student.favoriteColor}/>
    <button
      className="card__delete-btn"
      title={`Удалить карточку студента ${student.name}`}
      onClick={handleDeleteBtnClick}
    >
      <span className="visually-hidden">{`Удалить карточку студента ${student.name}`}</span>
    </button>
  </li>;
};

StudentsCard.propTypes = {
  student: PropTypes.shape(studentTypes).isRequired
};

export default StudentsCard;
