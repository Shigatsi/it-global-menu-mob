import React from "react";
import { Route, Link } from "react-router-dom";

import "./MenuList.css";

// import menuTree from "../../utils/mockups/menuTree.js";
import menuTree from "../../utils/mockups/tempMenu.js";
import arrowRight from "../../images/icon_16x16_S_Arrow-right.svg";
import arrowLeft from "../../images/icon_16x16_S_Arrow-left.svg";

function MenuList () {
  const [currentLevel, setCurrentLevel] = React.useState(0);
  const [currentTree, setCurrentTree] = React.useState(menuTree);
  const [selectedMenuItem, setSelectedMenuItem] = React.useState('');


  function decreaseCurrentLevel(currentLevel) {
    setCurrentLevel(currentLevel - 1);

  }

  function findMyParent (node, subtree, result) {
    console.log("trun'",node, subtree, result)
    if(result.parent) {
      return
    }
    if (!subtree.item) {
      return
    }
    if (subtree.items === undefined) {
      return
    }
    for (let item of subtree.items) {
      if (node === item)
          result.parent = subtree
      else
      findMyParent(node, item, result)
    }
  }


  function setMenuItemState(currentTree, currentLevel, item) {
    setCurrentTree(currentTree);
    setCurrentLevel(currentLevel);
    setSelectedMenuItem(item);
  }

  let result = {}
  console.log('currentTree(28): ', menuTree, 'currentLevel: ', currentLevel)
  console.log('result', result);


  if  (currentLevel === 0) {
    return (
      <ul className="menu-list">
      {currentTree.items.map((element) =>
        MenuItemLevelZero(element, setMenuItemState)
      )}
    </ul>
    )
  } else if (currentLevel === 1) {
    return(
      <>
        <Link to="#" className="menu-list__link menu-list__link_type_header" onClick={()=>  findMyParent(currentTree, menuTree, result)}>
          <button className="menu-list__button" type="button">
            <img
              className="menu-list__icon"
              src={arrowLeft}
              alt="иконка меню"
            />
          </button>
          {selectedMenuItem}
        </Link>
        <ul className="menu-list">
          {currentTree.map((element) =>
            MenuItemLevelOne(element, setMenuItemState)
          )}
        </ul>
      </>
    )
  } else {
    return(
      <>
        <Link to="#" className="menu-list__link menu-list__link_type_header" onClick={()=> decreaseCurrentLevel(currentLevel)}>
          <button className="menu-list__button" type="button">
            <img
              className="menu-list__icon"
              src={arrowLeft}
              alt="иконка меню"
            />
          </button>
          {selectedMenuItem}
        </Link>
        <ul className="menu-list">
          {currentTree.map((element) =>
            MenuItemLevelTwo(element, setMenuItemState)
          )}
        </ul>
      </>
    )
  }



}



export default MenuList;


function MenuItemLevelZero(element, setMenuItemState) {
  console.log("MenuItemLevelZero", element);
  return (
    <li>
      <Link
        onClick={(_) => {
          setMenuItemState(element.items, 1, element.item)
        }}
        className="menu-list__link"
        to="#"
      >
        {element.item}
        <button className="menu-list__button" type="button">
          <img className="menu-list__icon" src={arrowRight} alt="иконка меню" />
        </button>
      </Link>
    </li>
  );
}

function MenuItemLevelOne(element, setMenuItemState) {
  console.log("MenuItemLevelOne", element);
  return (
    <li>
      <Link
        onClick={(_) => {
          setMenuItemState(element.items, 2, element.item);
        }}
        className="menu-list__link"
        to="#"
      >
        {element.item}
        <button className="menu-list__button" type="button">
          <img className="menu-list__icon" src={arrowRight} alt="иконка меню" />
        </button>
      </Link>
    </li>
  );
}


function MenuItemLevelTwo(element, setMenuItemState) {
  console.log("MenuItemLevelTwo", element);
  return (
    <li>
      <Link
        onClick={(_) => {
          setMenuItemState(element.items, 2, element.title);
        }}
        className="menu-list__link"
        to="#"
      >
        {element.item}
        <button className="menu-list__button" type="button">
          <img className="menu-list__icon" src={arrowRight} alt="иконка меню" />
        </button>
      </Link>
    </li>
  );
}
