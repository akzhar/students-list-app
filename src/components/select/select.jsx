import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';

import {Class} from '../../const.js';

import SelectOptionText from '../select/select-option-text.jsx';
import SelectOptionColor from '../select/select-option-color.jsx';

const Select = ({options, id, name, optionType = `text`, initial = ``, onChange = null}) => {

  const initialValue = (initial && options.find((option) => option === initial)) ? initial : ``;
  const [activeOption, setActiveOption] = useState(initialValue);
  const inputRef = useRef();
  const selectRef = useRef();
  const selectOptionsRef = useRef();

  const onOptionSelection = (newValue) => {
    if (activeOption !== newValue) {
      setActiveOption(newValue);
      if (onChange) {
        // селект при изменении значения возвращает в переданный cb
        // свое новое значение и ref на input
        const select = {newValue, inputRef: inputRef.current};
        onChange(select);
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

  const handleOptionSelect = (evt) => onOptionSelection(evt.target.textContent);

  const handleOptionsSpaceDown = (evt) => {
    if (evt.key === ` `) {
      onOptionSelection(evt.target.textContent);
    }
  };

  const getOptionComponent = (option, isActive) => {
    switch (optionType) {
      case `color`:
        return <SelectOptionColor option={option} isActive={isActive}/>;
      default:
        return <SelectOptionText option={option} isActive={isActive}/>;
    }
  };

  return <React.Fragment>
    <div
      className={`${Class.SELECT.ELEM} ${Class.SELECT.ELEM}--${optionType}`}
      data-type={optionType}
      ref={selectRef}
      onClick={handleSelectClick}
      onKeyDown={handleSelectSpaceDown}
    >
      <input
        type="text"
        readOnly
        id={id}
        name={name}
        value={activeOption}
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
            {getOptionComponent(option, option === activeOption)}
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
  optionType: PropTypes.string,
  initial: PropTypes.string,
  onChange: PropTypes.func
};

export default Select;

