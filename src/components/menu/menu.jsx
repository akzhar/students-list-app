import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions.js';
import {SORT_OPTIONS} from '../../const.js';

import Select from '../select/select.jsx';

const Menu = ({activeSort, onActiveSearchChange, onActiveSortChange}) => (
  <section className="menu">
    <div className="menu__row">
      <h1>Студенты</h1>
      <Link to="/new" className="button button--add">Добавить студента</Link>
    </div>
    <form className="menu__row" action="#" method="get">
      <div className="menu__search-field">
        <input
          className="input"
          type="text"
          placeholder="Поиск по имени"
          onChange={(evt) => onActiveSearchChange(evt.target.value)}
        />
      </div>
      <div className="menu__sort-field">
        <Select
          options={SORT_OPTIONS}
          initialActive={activeSort}
          onActiveOptionChange={onActiveSortChange}
        />
      </div>
    </form>
  </section>
);

const mapStateToProps = (state) => ({
  activeSort: state.activeSort
});

const mapDispatchToProps = (dispatch) => ({
  onActiveSearchChange: (newActiveSearch) => dispatch(ActionCreator.changeActiveSearch(newActiveSearch)),
  onActiveSortChange: (newActiveSort) => dispatch(ActionCreator.changeActiveSort(newActiveSort))
});

Menu.propTypes = {
  activeSort: PropTypes.string.isRequired,
  onActiveSearchChange: PropTypes.func.isRequired,
  onActiveSortChange: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
