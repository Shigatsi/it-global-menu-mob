import React from "react";
import { Route, Link } from "react-router-dom";

import "./MenuList.css";

import menu from "../../utils/mockups/menuTree.js";
import arrowRight from "../../images/icon_16x16_S_Arrow-right.svg";
import arrowLeft from "../../images/icon_16x16_S_Arrow-left.svg";

function MenuList({ selectedMenuItem, onMenuItemClick, onExpandedMenuClick }) {
  return (
    <ul className={selectedMenuItem ? "menu-list_type_expanded" : "menu-list"}>
      {selectedMenuItem ? (
        <Link
          to="#"
          className="menu-list__link menu-list__link_type_header"
          onClick={onExpandedMenuClick}
        >
          <button className="menu-list__button" type="button">
            <img
              className="menu-list__icon"
              src={arrowLeft}
              alt="иконка меню"
            />
          </button>
          {selectedMenuItem}
        </Link>
      ) : (
        menu.map((item, i) => (
          <li key={i}>
            <Link
              onClick={(_) => onMenuItemClick(item.item)}
              className="menu-list__link"
              to="#"
            >
              {item.item}

              <button className="menu-list__button" type="button">
                <img
                  className="menu-list__icon"
                  src={arrowRight}
                  alt="иконка меню"
                />
              </button>
            </Link>
          </li>
        ))
      )}
    </ul>
  );
}

export default MenuList;
