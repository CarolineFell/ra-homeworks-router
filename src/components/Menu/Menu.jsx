import React from 'react';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';

const Menu = ({ navList }) => {
  return (
    <nav className="menu">
      {navList.map((item) => (
        <NavLink exact to={item.link} className="menu__item" activeClassName="menu__item-active" key={shortid.generate()}>
        {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

// <nav class="menu">
//  <a class="menu__item" href="/">...</a>
// </nav>

export default Menu;