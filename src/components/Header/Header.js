import React from "react";

import logoItGlobal from "../../images/Logo_ITG.svg";

import "./Header.css";

import Menu from "../Menu/Menu.js"

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoItGlobal} alt="Логотип ITGLOBAL" />
      <Menu />
    </header>
  );
}

export default Header;
