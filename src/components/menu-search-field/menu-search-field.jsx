import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions.js';

const MenuSearchField = ({onSearchSubstringChange}) => (
  <div className="menu__search-field">
    <input
      className="input"
      type="text"
      placeholder="Поиск по имени"
      onChange={(evt) => onSearchSubstringChange(evt.target.value)}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  onSearchSubstringChange: (newSearchSubstring) => dispatch(ActionCreator.changeSearchSubstring(newSearchSubstring)),
});

MenuSearchField.propTypes = {
  onSearchSubstringChange: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(MenuSearchField);
