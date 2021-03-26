import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions.js';
import {SPECIALISATIONS, GROUPS, QUESTION_NAMES, SEX_TYPES, AVAILABLE_COLORS, Class, Message} from '../../const.js';

import Select from '../select/select.jsx';
import InputAvatar from '../input-avatar/input-avatar.jsx';

import defaultAvatar from '../../img/avatar.svg';

const StudentForm = ({showPopup, addStudent}) => {

  const formRef = useRef();
  const avatarImageRef = useRef();
  const btnSubmitRef = useRef();

  const resetForm = () => {
    formRef.current.reset();
    avatarImageRef.current.src = defaultAvatar;
    resetAllSelects();
  };

  const resetAllSelects = () => {
    const selects = formRef.current.querySelectorAll(`.select`);
    selects.forEach((select) => {
      const input = select.querySelector(`input[readonly]`);
      const optionClass = (select.dataset.type === `color`) ? `${Class.SELECT.OPTION}-color` : Class.SELECT.OPTION;
      const activeOption = select.querySelector(`.${optionClass}--active`);
      input.value = ``;
      if (activeOption) {
        activeOption.classList.remove(`${optionClass}--active`);
      }
    });
  };

  const removeWarnings = () => {
    applyWarningClassToQuestions(`remove`, QUESTION_NAMES);
  };

  const addWarnings = (questionNames) => {
    applyWarningClassToQuestions(`add`, questionNames);
  };

  // ф-ция принимает FormData
  // ф-ция возвращает массив с именами невалидных вопросов
  const getNotValidQuestions = (studentData) => {
    // поле просто не должно быть пустым
    return QUESTION_NAMES.filter((question) => !studentData.get(question));
  };

  const applyWarningClassToQuestions = (method, questionNames) => {
    questionNames.forEach((questionName) => {
      const question = formRef.current.querySelector(`#${questionName}-question`);
      question.classList[method](Class.QUESTION_WARNING);
    });
  };

  const onStudentCreation = () => {
    showPopup(Message.OK.CARD_WAS_CREATED);
    resetForm();
    btnSubmitRef.current.disabled = false;
  };

  const onStudentCreationFail = () => {
    showPopup(Message.ERROR.CARD_WAS_NOT_CREATED);
    btnSubmitRef.current.disabled = false;
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const studentData = new FormData(formRef.current);
    const notValidQuestions = getNotValidQuestions(studentData);
    removeWarnings();
    if (notValidQuestions.length) {
      // задержка нужна для срабатывания анимации при повторной отправке формы
      setTimeout(() => addWarnings(notValidQuestions), 100);
      showPopup(Message.ERROR.NOT_VALID_FIELDS);
    } else {
      btnSubmitRef.current.disabled = true;
      const onSuccess = onStudentCreation;
      const onFail = onStudentCreationFail;
      addStudent(studentData, onSuccess, onFail);
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
    <InputAvatar avatarImageRef={avatarImageRef}/>
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
          <Select options={SPECIALISATIONS} id="spec" name="spec" onChange={handleSelectChange}/>
        </div>
        <div className="student-form__question" id="group-question">
          <label htmlFor="group">Группа</label>
          <Select options={GROUPS} id="group" name="group" onChange={handleSelectChange}/>
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
        <div className="student-form__question" id="favcolor-question">
          <label htmlFor="favcolor">Любимый цвет</label>
          <Select options={AVAILABLE_COLORS} id="favcolor" name="favcolor" optionType="color" onChange={handleSelectChange}/>
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
