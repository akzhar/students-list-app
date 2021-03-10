import React from 'react';
import {Link} from 'react-router-dom';
import {SORT_OPTIONS} from '../../const.js';

const Menu = () => (
  <section className="menu">
    <div className="menu__row">
      <h1>Студенты</h1>
      <Link to="/new" className="button button--add">Добавить студента</Link>
    </div>
    <form className="menu__row" action="#" method="get">
      <div className="menu__search-field">
        <input className="input input--search" type="text" name="name" placeholder="Поиск по имени"/>
      </div>
      <div className="menu__sort-field">
        <select className="input input--select" name="sort">
          {SORT_OPTIONS.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </form>
  </section>
);

export default Menu;
