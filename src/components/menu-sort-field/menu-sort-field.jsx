import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions.js';
import {SORT_OPTIONS} from '../../const.js';

import Select from '../select/select.jsx';

const MenuSortField = ({activeSort, onActiveSortChange}) => (
  <div className="menu__sort-field">
    <Select
      options={SORT_OPTIONS}
      initialActive={activeSort}
      onActiveOptionChange={onActiveSortChange}
    />
  </div>
);

const mapStateToProps = (state) => ({
  activeSort: state.activeSort
});

const mapDispatchToProps = (dispatch) => ({
  onActiveSortChange: (newActiveSort) => dispatch(ActionCreator.changeActiveSort(newActiveSort))
});

MenuSortField.propTypes = {
  activeSort: PropTypes.string.isRequired,
  onActiveSortChange: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSortField);
