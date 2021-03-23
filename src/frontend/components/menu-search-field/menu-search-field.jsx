import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions.js';

const MenuSearchField = ({searchSubstring = ``, changeSearchSubstring}) => (
  <div className="menu__search-field">
    <input
      className="input"
      type="text"
      placeholder="Поиск по имени"
      value={searchSubstring}
      onChange={(evt) => changeSearchSubstring(evt.target.value)}
    />
  </div>
);

const mapStateToProps = (store) => ({
  searchSubstring: store.active.searchSubstring
});


const mapDispatchToProps = (dispatch) => ({
  changeSearchSubstring: (newSearchSubstring) => dispatch(ActionCreator.changeSearchSubstring(newSearchSubstring)),
});

MenuSearchField.propTypes = {
  searchSubstring: PropTypes.string,
  changeSearchSubstring: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSearchField);
