import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions.js';

const MenuSearchField = ({onActiveSearchChange}) => (
  <div className="menu__search-field">
    <input
      className="input"
      type="text"
      placeholder="Поиск по имени"
      onChange={(evt) => onActiveSearchChange(evt.target.value)}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  onActiveSearchChange: (newActiveSearch) => dispatch(ActionCreator.changeActiveSearch(newActiveSearch)),
});

MenuSearchField.propTypes = {
  onActiveSearchChange: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(MenuSearchField);
