import React from 'react';
import {SEX_TYPES, AVAILABLE_COLORS} from '../../const.js';
import SPECIALISATIONS from '../../mocks/specialisations.json';
import GROUPS from '../../mocks/groups.json';

import Select from '../select/select.jsx';

import avatar from '../../img/avatar.svg';

const StudentForm = () => (
  <form className="student-form" action="#" method="post">
    <fieldset>
      <legend className="visually-hidden">Загрузка аватара нового студента</legend>
      <img className="student-form__avatar" src={avatar} alt="Аватар нового студента" width="82" height="82"/>
      <div className="student-form__avatar-upload">
        <label htmlFor="avatar">Сменить аватар</label>
        <input id="avatar" type="file"/>
        <span>500x500</span>
      </div>
    </fieldset>
    <fieldset>
      <legend className="visually-hidden">Вопросы о новом студенте</legend>
      <div className="student-form__col">
        <div className="student-form__question">
          <label htmlFor="name">ФИО</label>
          <input className="input" type="text" id="name" placeholder="Иванов Иван Иванович"/>
        </div>
        <div className="student-form__question">
          <label htmlFor="email">Email</label>
          <input className="input" type="email" id="email" placeholder="ivanov@gmail.com"/>
        </div>
        <div className="student-form__question">
          <label htmlFor="spec">Специальность</label>
          <Select options={SPECIALISATIONS.map((option) => option.name)}/>
        </div>
        <div className="student-form__question">
          <label htmlFor="group">Группа</label>
          <Select options={GROUPS.map((option) => option.name)}/>
        </div>
        <div className="student-form__question">
          <label htmlFor="rating">Рейтинг</label>
          <input className="input" type="number" min="0" id="rating" placeholder="0"/>
        </div>
      </div>
      <div className="student-form__col">
        <div className="student-form__question">
          <label>Пол</label>
          <Select options={SEX_TYPES}/>
        </div>
        <div className="student-form__question">
          <label>Любимый цвет</label>
          <Select options={AVAILABLE_COLORS}/>
        </div>
      </div>
    </fieldset>
    <button className="button" type="submit" disabled>Создать</button>
  </form>
);

export default StudentForm;
