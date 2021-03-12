import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';

const Select = ({options, name, initial = ``, onChange = null}) => {

  const initialValue = initial || options[0];
  const [activeOption, setActiveOption] = useState(initialValue);
  const selectRef = useRef();
  const selectOptionsRef = useRef();

  const onOptionSelection = (newActiveOption) => {
    if (activeOption !== newActiveOption) {
      setActiveOption(newActiveOption);
      if (onChange) {
        onChange(newActiveOption);
      }
    }
  };

  const toggleSelectOptions = () => {
    selectRef.current.classList.toggle(`select--opened`);
    selectOptionsRef.current.classList.toggle(`select__options--opened`);
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
    <div
      className="select"
      ref={selectRef}
      tabIndex="0"
      onClick={handleSelectClick}
      onKeyDown={handleSelectSpaceDown}
    >
      <input
        type="text"
        readOnly
        className="visually-hidden"
        id={name}
        name={name}
        value={activeOption}
      />
      <output>{activeOption}</output>
      <ul
        className="select__options"
        ref={selectOptionsRef}
        onClick={handleOptionSelect}
        onKeyDown={handleOptionsSpaceDown}
      >
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
    </div>
  </React.Fragment>;
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  initial: PropTypes.string,
  onChange: PropTypes.func
};

export default Select;

