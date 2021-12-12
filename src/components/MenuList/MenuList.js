import React from "react";
import { Route, Link } from "react-router-dom";

import "./MenuList.css";

import menuTree from "../../utils/mockups/menuTree.js";
import arrowRight from "../../images/icon_16x16_S_Arrow-right.svg";
import arrowLeft from "../../images/icon_16x16_S_Arrow-left.svg";

// function MenuList() {
//   // const [selectedMenuItem, setselectedMenuItem] = React.useState("");

//   // function handlelMenuItemClick(item) {
//   //   setselectedMenuItem(item);
//   // }

//   // console.log("Menu List", selectedMenuItem);

//   // function outExpandedMenu() {
//   //   setselectedMenuItem("");
//   // }

//   // {selectedMenuItem ? "menu-list_type_expanded" : "menu-list"}

// //   return (
// //     <ul className="menu-list">
// //       <MenuItem menu={menu} />
// //     </ul>
// //   );

// }

// class MenuList extends React.Component {
//   constructor (props) {
//     super (props);
//     this.state = {
//       currentLevel: 0,
//       currentTree: menuTree,

//     };
//   }

//   componentDidMount() {
//     this.setState({ currentTree: this.menuTree });

//   }

//   setCurrentTreeAndLevel(currentTree, currentLevel) {
//     this.setState({
//       currentLevel,
//       currentTree,
//     });

//   console.log('MenuList, currentTree ', currentTree )
//   }


//   render() {
//     const { currentLevel, currentTree } = this.state;
//     console.log('this', this, 'this', this.state)
//     const setMenuListState = this.setCurrentTreeAndLevel.bind(this);

//     if (currentLevel === 0) {
//       console.log('MenuList, currentTree ', currentTree );
//       return (
//         <>
//           <Link to="#" className="menu-list__link menu-list__link_type_header">
//             <button className="menu-list__button" type="button">
//               <img
//                 className="menu-list__icon"
//                 src={arrowLeft}
//                 alt="иконка меню"
//               />
//             </button>
//           </Link>
//           <ul className="menu-list">
//             {currentTree.map((element) =>
//               MenuItemLevelZero(element, setMenuListState)
//             )}
//           </ul>
//         </>
//       );
//     }
//   }
// }

// export default MenuList;

function MenuList () {
  const [currentLevel, setCurrentLevel] = React.useState(0);
  const [currentTree, setCurrentTree] =React.useState(menuTree);

  React.useEffect(()=>{
    setCurrentTree(menuTree);
    console.log('work useEffect?');
  },[menuTree]);

  function setCurrentTreeAndLevel(currentTree, currentLevel) {
    setCurrentTree(currentTree);
    setCurrentLevel(currentLevel);
  }

  console.log(currentTree, currentLevel)
  return(
    <>

      (currentLevel == 0) ? (

      <>
          <Link to="#" className="menu-list__link menu-list__link_type_header">
            <button className="menu-list__button" type="button">
              <img
                className="menu-list__icon"
                src={arrowLeft}
                alt="иконка меню"
              />
            </button>
          </Link>
          <ul className="menu-list">
            {currentTree.map((element) =>
              MenuItemLevelZero(element, setCurrentTreeAndLevel)
            )}
          </ul>
        </>
      )

    </>
  )

}

export default MenuList;

// function MenuItem({ onMenuItemClick, menu }) {
//   console.log(menu);
//   return menu.map((item, i) => (
//     <li key={i}>
//       <Link
//         onClick={(_) => onMenuItemClick(item.item)}
//         className="menu-list__link"
//         to="#"
//       >
//         {item.item}

//         <button className="menu-list__button" type="button">
//           <img className="menu-list__icon" src={arrowRight} alt="иконка меню" />
//         </button>
//       </Link>
//     </li>
//   ));
// }

function MenuItemLevelZero(element, settMenuListState) {
  console.log("MenuItemLevelZero", element);
  return (
    <li>
      <Link
        onClick={(_) => {
          settMenuListState(element.subitems, 1);
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

// class MenuItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isExpanded: false,
//     };
//     console.log("MenuItem", this.state);
//   }

//   handlelMenuItemClick = () => {
//     this.setState({ isExpanded: true });
//     console.log("MenuItem", this.state);
//   };

//   render() {
//     return this.props.menu.map((item, i) => (
//       <li key={i}>
//         <Link
//           onClick={this.handlelMenuItemClick}
//           className="menu-list__link"
//           to="#"
//         >
//           {item.item}

//           <button className="menu-list__button" type="button">
//             <img
//               className="menu-list__icon"
//               src={arrowRight}
//               alt="иконка меню"
//             />
//           </button>
//         </Link>
//       </li>
//     ));
//   }
// }

// {selectedMenuItem ? (
//   <>
//     <Link
//       to="#"
//       className="menu-list__link menu-list__link_type_header"
//       // onClick={handlelMenuItemClick}
//     >
//       <button className="menu-list__button" type="button">
//         <img
//           className="menu-list__icon"
//           src={arrowLeft}
//           alt="иконка меню"
//         />
//       </button>
//       {/* {selectedMenuItem} */}
//     </Link>
//     <MenuItem />
//     {/* onMenuItemClick={handlelMenuItemClick} */}
//   </>
// ) : (
//   <MenuItem menu={menu} />
//   //onMenuItemClick={handlelMenuItemClick}
// )}
