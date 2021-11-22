import React from "react";

import logoItGlobal from "../../images/Logo_ITG.svg";
import iconCross from "../../images/Vector 33_(Stroke).svg";
import menuIcon from "../../images/icon_16x16_M_Hamburger.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoItGlobal} alt="Логотип ITGLOBAL" />
      <nav className="menu">
        <button className="menu__button" type="button">
          <img className="menu__icon-menu" src={menuIcon} alt="иконка меню" />
        </button>
        {/* <ul className="menu__list">
          <li className="menu__item"></li>
        </ul> */}
      </nav>
    </header>
  );
}

export default Header;
