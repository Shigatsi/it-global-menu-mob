import React from 'react';

import menu from '../../utils/mockups/menu.js';
import iconCross from "../../images/Vector 33_(Stroke).svg";
import menuIcon from "../../images/icon_16x16_M_Hamburger.svg";

function Menu() {
  return(
    <nav className="menu">
        <button className="menu__button" type="button">
          <img className="menu__icon-menu" src={menuIcon} alt="иконка меню" />
        </button>
        {/* <ul className="menu__list">
          <li className="menu__item"></li>
        </ul> */}
      </nav>
  )
}

export default Menu;
