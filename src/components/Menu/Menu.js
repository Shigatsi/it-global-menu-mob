import React from "react";
import { Route, Link } from "react-router-dom";

import "./Menu.css";

import menu from "../../utils/mockups/menu.js";
import iconCross from "../../images/Vector 33_(Stroke).svg";
import menuIcon from "../../images/icon_16x16_M_Hamburger.svg";

import CountrySelector from "../CountrySelector/CountrySelector.js";

function Menu() {
  const [navigation, setNavigation] = React.useState(false);
  const toggleNavigation = () => {
    setNavigation(!navigation);
  };

  return (
    <>
      <button className="menu__button" type="button">
        <img
          className="menu__icon-menu"
          src={menuIcon}
          onClick={toggleNavigation}
          alt="иконка меню"
        />
      </button>

      <nav
        className={
          navigation
            ? "navigation-menu navigation-menu_type_active"
            : "navigation-menu"
        }
      >
        <div className="navigation-menu__content">
          <div className="navigation-menu__top">
            <CountrySelector />
            <Link to="#" className="navigation__bars">
              <img
                className="navigation__btn-close"
                src={iconCross}
                onClick={toggleNavigation}
                alt="close"
              />
            </Link>
          </div>
          <Link
            to="#"
            className="navigation-menu__link"
            onClick={toggleNavigation}
          >
            Контакты
          </Link>
          <Link
            to="#"
            className="navigation-menu__link"
            onClick={toggleNavigation}
          >
            Поиск
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Menu;
