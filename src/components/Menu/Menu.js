import React from "react";
import { Route, Link } from "react-router-dom";

import "./Menu.css";

import iconCross from "../../images/Vector 33_(Stroke).svg";
import menuIcon from "../../images/icon_16x16_M_Hamburger.svg";

import CountrySelector from "../CountrySelector/CountrySelector.js";
import MenuList from "../MenuList/MenuList.js";

function Menu() {
  const [navigation, setNavigation] = React.useState(false);
  const [selectedMenuItem, setselectedMenuItem] = React.useState("");

  const toggleNavigation = () => {
    setNavigation(!navigation);
  };

  function handlelMenuItemClick(item) {
    setselectedMenuItem(item);
  }

  function outExpandedMenu() {
    setselectedMenuItem("");
  }

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
          <div className="navigation-menu__header">
            <CountrySelector />
            <Link to="#" className="navigation__close">
              <img
                className="navigation__btn-close"
                src={iconCross}
                onClick={toggleNavigation}
                alt="close"
              />
            </Link>
          </div>

          <MenuList
            selectedMenuItem={selectedMenuItem}
            onMenuItemClick={handlelMenuItemClick}
            onExpandedMenuClick={outExpandedMenu}
          />
          <div className="navigation-menu__footer">
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
        </div>
      </nav>
    </>
  );
}
export default Menu;
