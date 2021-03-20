import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions.js';
import {QUESTION_NAMES, SEX_TYPES, AVAILABLE_COLORS, VALID_IMG_TYPES, Class, Message} from '../../const.js';
import SPECIALISATIONS from '../../mocks/specialisations.json';
import GROUPS from '../../mocks/groups.json';

import Select from '../select/select.jsx';

import defaultAvatar from '../../img/avatar.svg';

const StudentForm = ({showPopup, addStudent}) => {

  const formRef = useRef();
  const avatarImageRef = useRef();
  const avatarInputRef = useRef();
  const avatarDropZoneRef = useRef();
  const btnSubmitRef = useRef();

  const formReset = () => {
    formRef.current.reset();
    avatarImageRef.current.src = defaultAvatar;
    resetAllSelects();
  };

  const resetAllSelects = () => {
    const selects = formRef.current.querySelectorAll(`.select input[readonly]`);
    selects.forEach((select) => {
      select.value = ``;
    });
  };

  const removeWarningStyle = () => {
    markNotValidQuestions(QUESTION_NAMES, false);
  };

  const addWarningStyle = (questionNames) => {
    markNotValidQuestions(questionNames, true);
  };

  // возвращает массив с именами невалидных полей
  const getNotValidQuestionNames = (studentData) => {
    const keys = Object.keys(studentData);
    return keys.filter((key) => !studentData[key]); // поле просто не должно быть пустым
  };

  const markNotValidQuestions = (questionsIds, bool = true) => {
    const method = bool ? `add` : `remove`;
    questionsIds.forEach((questionsId) => {
      const question = formRef.current.querySelector(`#${questionsId}-question`);
      question.classList[method](Class.QUESTION_WARNING);
    });
  };

  const getStudentData = (formData) => ({
    avatar: formData.get(`avatar`),
    name: formData.get(QUESTION_NAMES[0]),
    email: formData.get(QUESTION_NAMES[1]),
    spec: formData.get(QUESTION_NAMES[2]),
    group: formData.get(QUESTION_NAMES[3]),
    rating: formData.get(QUESTION_NAMES[4]),
    sex: formData.get(QUESTION_NAMES[5]),
    age: formData.get(QUESTION_NAMES[6]),
    favoriteColor: formData.get(QUESTION_NAMES[7])
  });

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(formRef.current);
    const studentData = getStudentData(formData);
    const notValidQuestionNames = getNotValidQuestionNames(studentData);
    if (notValidQuestionNames.length) {
      removeWarningStyle();
      setTimeout(() => addWarningStyle(notValidQuestionNames), 100);
      showPopup(Message.ERROR.NOT_VALID_FIELDS);
    } else {
      btnSubmitRef.current.disabled = true;
      removeWarningStyle();
      const onSuccess = () => {
        showPopup(Message.OK.CARD_WAS_CREATED);
        formReset();
        btnSubmitRef.current.disabled = false;
      };
      const onFail = () => showPopup(Message.ERROR.CARD_WAS_NOT_CREATED);
      addStudent(studentData, onSuccess, onFail);
    }
  };

  const avatarDropZoneHighlight = () => {
    avatarDropZoneRef.current.classList.add(Class.AVATAR_DROPZONE_DRAGGED_OVER);
  };

  const avatarDropZoneLowlight = () => {
    avatarDropZoneRef.current.classList.remove(Class.AVATAR_DROPZONE_DRAGGED_OVER);
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
      showPopup(Message.ERROR.NOT_VALID_AVATAR_TYPE);
    }
  };

  const handleInputChange = (evt) => {
    const input = evt.target;
    const question = input.parentNode;
    const isWarning = question.classList.contains(Class.QUESTION_WARNING);
    if (isWarning) {
      question.classList.remove(Class.QUESTION_WARNING);
    }
  };

  const handleSelectChange = ({inputRef}) => {
    const questionId = inputRef.id;
    const question = document.querySelector(`#${questionId}-question`);
    const isWarning = question.classList.contains(Class.QUESTION_WARNING);
    if (isWarning) {
      question.classList.remove(Class.QUESTION_WARNING);
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
        <img src={defaultAvatar} alt="Аватар нового студента" ref={avatarImageRef}/>
      </div>
      <div className="student-form__avatar-upload">
        <input id="avatar" type="file" name="avatar" ref={avatarInputRef} onChange={onAvatarInputChange}/>
        <label htmlFor="avatar">Сменить аватар</label>
        <span>500x500</span>
      </div>
    </fieldset>
    <fieldset className="student-form__questions">
      <legend className="visually-hidden">Вопросы о новом студенте</legend>
      <div className="student-form__col">
        <div className="student-form__question" id="name-question">
          <label htmlFor="name">ФИО</label>
          <input className="input" type="text" name="name" id="name" placeholder="Иванов Иван Иванович" onChange={handleInputChange}/>
        </div>
        <div className="student-form__question" id="email-question">
          <label htmlFor="email">Email</label>
          <input className="input" type="email" id="email" name="email" placeholder="ivanov@gmail.com" onChange={handleInputChange}/>
        </div>
        <div className="student-form__question" id="spec-question">
          <label htmlFor="spec">Специальность</label>
          <Select options={SPECIALISATIONS.map((option) => option.name)} id="spec" name="spec" onChange={handleSelectChange}/>
        </div>
        <div className="student-form__question" id="group-question">
          <label htmlFor="group">Группа</label>
          <Select options={GROUPS.map((option) => option.name)} id="group" name="group" onChange={handleSelectChange}/>
        </div>
        <div className="student-form__question" id="rating-question">
          <label htmlFor="rating">Рейтинг</label>
          <input className="input" type="number" min="1" id="rating" name="rating" placeholder="0" onChange={handleInputChange}/>
        </div>
      </div>
      <div className="student-form__col">
        <div className="student-form__question" id="sex-question">
          <label htmlFor="sex">Пол</label>
          <Select options={SEX_TYPES} id="sex" name="sex" onChange={handleSelectChange}/>
        </div>
        <div className="student-form__question" id="age-question">
          <label htmlFor="age">Возраст</label>
          <input className="input" type="number" min="16" max="120" id="age" name="age" placeholder="16" onChange={handleInputChange}/>
        </div>
        <div className="student-form__question" id="favoriteColor-question">
          <label htmlFor="favoriteColor">Любимый цвет</label>
          <Select options={AVAILABLE_COLORS} id="favoriteColor" name="favoriteColor" optionType="color" onChange={handleSelectChange}/>
        </div>
      </div>
    </fieldset>
    <button className="button" type="submit" ref={btnSubmitRef} disabled={false}>Создать</button>
  </form>;
};

const mapDispatchToProps = (dispatch) => ({
  showPopup: (message) => dispatch(ActionCreator.showPopup(message)),
  addStudent: (studentData, onSuccess, onFail) => dispatch(ActionCreator.addStudent(studentData, onSuccess, onFail))
});

StudentForm.propTypes = {
  showPopup: PropTypes.func.isRequired,
  addStudent: PropTypes.func.isRequired
};

export {StudentForm};
export default connect(null, mapDispatchToProps)(StudentForm);
