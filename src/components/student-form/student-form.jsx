import React, {useRef} from 'react';
import {SEX_TYPES, AVAILABLE_COLORS, VALID_IMG_TYPES} from '../../const.js';
import SPECIALISATIONS from '../../mocks/specialisations.json';
import GROUPS from '../../mocks/groups.json';

import Select from '../select/select.jsx';

import avatar from '../../img/avatar.svg';

const StudentForm = () => {

  const avatarImageRef = useRef();
  const avatarInputRef = useRef();
  const avatarDropZoneRef = useRef();

  const avatarDropZoneHighlight = () => {
    avatarDropZoneRef.current.classList.add(`student-form__avatar-dropzone--dragged-over`);
  };

  const avatarDropZoneLowlight = () => {
    avatarDropZoneRef.current.classList.remove(`student-form__avatar-dropzone--dragged-over`);
  };

  const onAvatarDropZoneDragEnter = (evt) => {
    evt.preventDefault();
    avatarDropZoneHighlight();
  };

  const onAvatarDropZoneDragOver = (evt) => {
    evt.preventDefault();
  };

  const onAvatarDropZoneDragLeave = (evt) => {
    evt.preventDefault();
    avatarDropZoneLowlight();
  };

  const onAvatarDropZoneDrop = (evt) => {
    evt.preventDefault();
    avatarDropZoneLowlight();
    const file = evt.dataTransfer.files[0];
    renderAvatarIfFileIsValid(file);
  };

  const onAvatarInputChange = () => {
    const file = avatarInputRef.current.files[0];
    renderAvatarIfFileIsValid(file);
  };

  const renderAvatar = (evt) => {
    avatarImageRef.current.src = evt.target.result;
  };

  const renderAvatarIfFileIsValid = (file) => {
    if (VALID_IMG_TYPES.includes(file.type)) {
      const fReader = new FileReader();
      fReader.readAsDataURL(file);
      fReader.addEventListener(`load`, renderAvatar);
    } else {
      // TODO: add popup message
      // alert(`Please choose a valid img type`);
    }
  };

  return <form className="student-form" action="#" method="post">
    <fieldset
      className="student-form__avatar-dropzone"
      ref={avatarDropZoneRef}
      onDragEnter={onAvatarDropZoneDragEnter}
      onDragOver={onAvatarDropZoneDragOver}
      onDragLeave={onAvatarDropZoneDragLeave}
      onDrop={onAvatarDropZoneDrop}
    >
      <legend className="visually-hidden">Загрузка аватара нового студента</legend>
      <div className="student-form__avatar">
        <img src={avatar} alt="Аватар нового студента" ref={avatarImageRef}/>
      </div>
      <div className="student-form__avatar-upload">
        <label htmlFor="avatar">Сменить аватар</label>
        <input id="avatar" type="file" ref={avatarInputRef} onChange={onAvatarInputChange}/>
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
  </form>;
};

export default StudentForm;
