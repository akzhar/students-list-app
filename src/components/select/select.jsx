import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';

const Select = ({options}) => {

  const [activeOption, setActiveOption] = useState(options[0]);
  const selectRef = useRef();

  const onOptionSelection = (newActiveOption) => {
    setActiveOption(newActiveOption);
    selectRef.current.classList.remove(`select__options--opened`);
  };

  const toggleSelectOptions = () => {
    selectRef.current.classList.toggle(`select__options--opened`);
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

  return <React.Fragment>
    <span className="select" tabIndex="0" onClick={handleSelectClick} onKeyDown={handleSelectSpaceDown}>{activeOption}</span>
    <ul className="select__options" ref={selectRef} onClick={handleOptionSelect} onKeyDown={handleOptionsSpaceDown}>
      {options.map((option) => (
        <li
          key={option}
          tabIndex="0"
          className={`select__option ${(option === activeOption) && `select__option--active`}`}
        >
          {option}
        </li>
      ))}
    </ul>
  </React.Fragment>;
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Select;

