import React, {useRef} from 'react';
import {SEX_TYPES, AVAILABLE_COLORS, VALID_IMG_TYPES} from '../../const.js';
import SPECIALISATIONS from '../../mocks/specialisations.json';
import GROUPS from '../../mocks/groups.json';

import Select from '../select/select.jsx';

import avatar from '../../img/avatar.svg';

const StudentForm = () => {

  const formRef = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const ratingInputRef = useRef();
  const avatarImageRef = useRef();
  const avatarInputRef = useRef();
  const avatarDropZoneRef = useRef();
  const btnSubmitRef = useRef();

  const formReset = () => {
    formRef.current.reset();
    avatarImageRef.current.src = avatar;
    // TODO: reset (re-render) Select's ?
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(formRef.current);
    // eslint-disable-next-line no-console
    console.log({
      avatar: formData.get(`avatar`),
      name: formData.get(`name`),
      email: formData.get(`email`),
      specialisation: formData.get(`specialisation`),
      group: formData.get(`group`),
      rating: formData.get(`rating`),
      sex: formData.get(`sex`),
      favoriteColor: formData.get(`favoriteColor`)
    });
    formReset();
    btnSubmitRef.current.disabled = true;
    // TODO: add popup message & redirect ?
    // alert(`New student was successfully added`);
  };

  const handleInputChange = () => {
    if (
      nameInputRef.current.value &&
      emailInputRef.current.value &&
      ratingInputRef.current.value
    ) {
      btnSubmitRef.current.disabled = false;
    } else {
      btnSubmitRef.current.disabled = true;
    }
  };

  const avatarDropZoneHighlight = () => {
    avatarDropZoneRef.current.classList.add(`student-form__avatar-dropzone--dragged-over`);
  };

  const avatarDropZoneLowlight = () => {
    avatarDropZoneRef.current.classList.remove(`student-form__avatar-dropzone--dragged-over`);
  };

  const onAvatarDropZoneDragOver = (evt) => {
    evt.preventDefault();
    avatarDropZoneHighlight();
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

  return <form className="student-form" action="#" method="post" ref={formRef} onSubmit={handleFormSubmit}>
    <fieldset
      className="student-form__avatar-dropzone"
      ref={avatarDropZoneRef}
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
        <input id="avatar" type="file" name="avatar" ref={avatarInputRef} onChange={onAvatarInputChange}/>
        <span>500x500</span>
      </div>
    </fieldset>
    <fieldset>
      <legend className="visually-hidden">Вопросы о новом студенте</legend>
      <div className="student-form__col">
        <div className="student-form__question">
          <label htmlFor="name">ФИО</label>
          <input className="input" type="text" name="name" required id="name" placeholder="Иванов Иван Иванович" ref={nameInputRef} onChange={handleInputChange}/>
        </div>
        <div className="student-form__question">
          <label htmlFor="email">Email</label>
          <input className="input" type="email" id="email" name="email" required placeholder="ivanov@gmail.com" ref={emailInputRef} onChange={handleInputChange}/>
        </div>
        <div className="student-form__question">
          <label htmlFor="specialisation">Специальность</label>
          <Select options={SPECIALISATIONS.map((option) => option.name)} name="specialisation"/>
        </div>
        <div className="student-form__question">
          <label htmlFor="group">Группа</label>
          <Select options={GROUPS.map((option) => option.name)} name="group"/>
        </div>
        <div className="student-form__question">
          <label htmlFor="rating">Рейтинг</label>
          <input className="input" type="number" min="1" id="rating" name="rating" required placeholder="0" ref={ratingInputRef} onChange={handleInputChange}/>
        </div>
      </div>
      <div className="student-form__col">
        <div className="student-form__question">
          <label htmlFor="sex">Пол</label>
          <Select options={SEX_TYPES} name="sex"/>
        </div>
        <div className="student-form__question">
          <label htmlFor="favoriteColor">Любимый цвет</label>
          <Select options={AVAILABLE_COLORS} name="favoriteColor"/>
        </div>
      </div>
    </fieldset>
    <button className="button" type="submit" ref={btnSubmitRef} disabled={true}>Создать</button>
  </form>;
};

export default StudentForm;
