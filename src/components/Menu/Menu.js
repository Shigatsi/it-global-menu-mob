import React from "react";
import { Route, Link } from "react-router-dom";

import "./Menu.css";

import menu from "../../utils/mockups/menuTree.js";
import iconCross from "../../images/Vector 33_(Stroke).svg";
import menuIcon from "../../images/icon_16x16_M_Hamburger.svg";
import arrowRight from "../../images/icon_16x16_S_Arrow-right.svg";

import CountrySelector from "../CountrySelector/CountrySelector.js";

function Menu() {
  const [navigation, setNavigation] = React.useState(false);
  const toggleNavigation = () => {
    setNavigation(!navigation);
  };

  const [selectedMenuItem, setselectedMenuItem] = React.useState("");
  function handlelMenuItemClick(item) {
    setselectedMenuItem(item);
    console.log(selectedMenuItem);
  }
  const [navItem, setNavItem] = React.useState(true);

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
          <ul
            className={
              selectedMenuItem
                ? "navigation-menu__list_type_expanded"
                : "navigation-menu__list"
            }
          >
            {selectedMenuItem
              ? console.log(selectedMenuItem)
              : console.log(selectedMenuItem)}
            {selectedMenuItem ? (
              <div>does it work</div>
            ) : (
              menu.map((item, i) => (
                <li key={i}>
                  <Link
                    onClick={(_) => handlelMenuItemClick(item.item)}
                    className="navigation-menu__link"
                    to="#"
                  >
                    {item.item}

                    <button className="menu__button" type="button">
                      <img
                        className="menu__icon-menu"
                        src={arrowRight}
                        alt="иконка меню"
                      />
                    </button>
                  </Link>
                </li>
              ))
            )}
          </ul>
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
