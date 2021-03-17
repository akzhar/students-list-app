import React from 'react';
import {Link} from 'react-router-dom';

const StudentsEmpty = () => (
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
    <div className="students__list students__list--empty">
      <p>К сожалению тут пока нет ни одного студента...</p>
      <Link to="/new" className="button button--add">Добавить студента</Link>
    </div>
  </section>
);

export default StudentsEmpty;
