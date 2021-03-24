import React from 'react';
import {Link} from 'react-router-dom';

import MenuSearchField from '../menu-search-field/menu-search-field.jsx';
import MenuSortField from '../menu-sort-field/menu-sort-field.jsx';

const Menu = () => (
  <section className="menu">
    <div className="menu__row">
      <h1>Студенты</h1>
      <Link to="/new" className="button button--add">Добавить студента</Link>
    </div>
    <div className="menu__row">
      <MenuSearchField/>
      <MenuSortField/>
    </div>
  </section>
);

export default Menu;
