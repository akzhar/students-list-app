import React from 'react';

const StudentsEmpty = () => (
  <section className="students">
    <div className="students__header">
      <span>ФИО</span>
      <span>Специальность</span>
      <span>Группа</span>
      <span>Возраст</span>
      <span>Рейтинг</span>
    </div>
    <div className="students__list students__list--empty">
      <p>К сожалению тут пока нет ни одного студента...</p>
    </div>
  </section>
);

export default StudentsEmpty;
