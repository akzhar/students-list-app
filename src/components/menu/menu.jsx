import React from 'react';
import {Link} from 'react-router-dom';
import {SORT_OPTIONS} from '../../const.js';

import Select from '../select/select.jsx';

const Menu = () => (
  <section className="menu">
    <div className="menu__row">
      <h1>Студенты</h1>
      <Link to="/new" className="button button--add">Добавить студента</Link>
    </div>
    <form className="menu__row" action="#" method="get">
      <div className="menu__search-field">
        <input className="input" type="text" name="name" placeholder="Поиск по имени"/>
      </div>
      <div className="menu__sort-field">
        <Select options={SORT_OPTIONS}/>
      </div>
    </form>
  </section>
);

export default Menu;
