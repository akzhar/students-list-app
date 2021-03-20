import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions.js';
import {SORT_TYPES} from '../../const.js';

import Select from '../select/select.jsx';

const MenuSortField = ({sortType, changeSortType}) => (
  <div className="menu__sort-field">
    <Select
      options={SORT_TYPES}
      name="sortType"
      initial={sortType}
      onChange={(newSortType) => changeSortType(newSortType)}
    />
  </div>
);

const mapStateToProps = (state) => ({
  sortType: state.active.sortType
});

const mapDispatchToProps = (dispatch) => ({
  changeSortType: (newSortType) => dispatch(ActionCreator.changeSortType(newSortType))
});

MenuSortField.propTypes = {
  sortType: PropTypes.string.isRequired,
  changeSortType: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSortField);
