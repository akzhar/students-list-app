import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import {Class} from '../../const.js';

import SelectOptionText from '../select/select-option-text.jsx';
import SelectOptionColor from '../select/select-option-color.jsx';

const Select = ({options, id, name, selectType = `text`, initial = ``, onChange = null}) => {

  const initialValue = (initial && options.find((option) => option === initial)) ? initial : ``;
  const optionClass = (selectType === `color`) ? `${Class.SELECT.OPTION}-color` : Class.SELECT.OPTION;
  const inputRef = useRef();
  const selectRef = useRef();
  const selectOptionsRef = useRef();

  useEffect(() => {
    inputRef.current.value = initialValue;
    const activeOption = selectOptionsRef.current.querySelector(`.${optionClass}[data-value="${initialValue}"]`);
    if (activeOption) {
      activeOption.classList.add(`${optionClass}--active`);
    }
  }, []);

  const onOptionSelection = (option) => {
    const newValue = option.textContent;
    const currentOption = option.querySelector(`.${optionClass}`);
    const activeOption = selectRef.current.querySelector(`.${optionClass}--active`);
    currentOption.classList.toggle(`${optionClass}--active`);
    if (activeOption) {
      activeOption.classList.remove(`${optionClass}--active`);
    }
    if (inputRef.current.value !== newValue) {
      inputRef.current.value = newValue;
      if (onChange) {
        // селект при изменении значения возвращает в переданный cb id и свое новое значение
        onChange({id: inputRef.current.id, newValue});
      }
    }
  };

  const toggleSelectOptions = () => {
    selectRef.current.classList.toggle(`${Class.SELECT.ELEM}--opened`);
    selectOptionsRef.current.classList.toggle(`${Class.SELECT.OPTIONS_CONTAINER}--opened`);
  };

  const handleSelectClick = () => toggleSelectOptions();

  const handleSelectSpaceDown = (evt) => {
    if (evt.key === ` `) {
      toggleSelectOptions();
    }
  };

  const handleOptionSelect = (evt) => onOptionSelection(evt.currentTarget);

  const handleOptionsSpaceDown = (evt) => {
    if (evt.key === ` `) {
      onOptionSelection(evt.currentTarget);
    }
  };

  const getOptionComponent = (option) => {
    switch (selectType) {
      case `color`:
        return <SelectOptionColor option={option}/>;
      default:
        return <SelectOptionText option={option}/>;
    }
  };

  return <React.Fragment>
    <div
      className={`${Class.SELECT.ELEM} ${Class.SELECT.ELEM}--${selectType}`}
      ref={selectRef}
      onClick={handleSelectClick}
      onKeyDown={handleSelectSpaceDown}
    >
      <input
        type="text"
        readOnly
        id={id}
        name={name}
        placeholder="Выбрать"
        ref={inputRef}
      />
      <ul
        className={Class.SELECT.OPTIONS_CONTAINER}
        ref={selectOptionsRef}
      >
        {options.map((option) => (
          <li
            key={option}
            tabIndex="0"
            onClick={handleOptionSelect}
            onKeyDown={handleOptionsSpaceDown}
          >
            {getOptionComponent(option)}
          </li>
        ))}
      </ul>
    </div>
  </React.Fragment>;
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  selectType: PropTypes.string,
  initial: PropTypes.string,
  onChange: PropTypes.func
};

export default Select;

