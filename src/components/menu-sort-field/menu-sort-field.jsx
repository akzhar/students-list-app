import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions.js';
import {SORT_TYPES} from '../../const.js';

import Select from '../select/select.jsx';

const MenuSortField = ({sortType, onSortTypeChange}) => (
  <div className="menu__sort-field">
    <Select
      options={SORT_TYPES}
      initialActive={sortType}
      onActiveOptionChange={onSortTypeChange}
    />
  </div>
);

const mapStateToProps = (state) => ({
  sortType: state.sortType
});

const mapDispatchToProps = (dispatch) => ({
  onSortTypeChange: (newSortType) => dispatch(ActionCreator.changeSortType(newSortType))
});

MenuSortField.propTypes = {
  sortType: PropTypes.string.isRequired,
  onSortTypeChange: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSortField);
