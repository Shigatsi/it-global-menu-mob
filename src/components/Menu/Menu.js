import React from "react";
import { Route, Link } from "react-router-dom";

import "./Menu.css";

import menu from "../../utils/mockups/menu.js";
import iconCross from "../../images/Vector 33_(Stroke).svg";
import menuIcon from "../../images/icon_16x16_M_Hamburger.svg";
import arrowRight from "../../images/icon_16x16_S_Arrow-right.svg";

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
          <div className="navigation-menu__header">
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
          <ul className="navigation-menu__list">
            {menu.map((item, i) => (
              <NavItem id={i} item={item.item} />
            ))}
          </ul>
          <div>
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

function NavItem(props) {
  const [menuItem, setMenuItem] = React.useState("");
  const [navItem, setNavItem] = React.useState(true);

  const onItemClick = () => {
    setMenuItem(props.item);
    setNavItem(!navItem);
    console.log(menuItem);
  };

  return (
    <li
      className={
        navItem
          ? "navigation-menu__item navigation-menu__item_type_active"
          : "navigation-menu__item"
      }
    >
      <Link onClick={onItemClick} className="navigation-menu__item-link" to="#">
        {props.item}

        <button className="menu__button" type="button">
          <img className="menu__icon-menu" src={arrowRight} alt="иконка меню" />
        </button>
      </Link>
    </li>
  );
}
