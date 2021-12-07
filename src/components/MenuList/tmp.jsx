
import React from 'react'

function MenuItem0(el, fn) {

  return <div>
    <p onClick={() => {fn(el.subitems, 1)}} >{el.title}</p>
  </div>
}

function MenuItem1(el, fn) {
  return <div>
    <p onClick={() => {fn(el.subitems, 2)}} >{el.title}</p>
  </div>
}

function MenuItem2(el, fn) {
  return <div>
    <p onClick={() => {}} >{el.title}</p>
  </div>
}

class Menu extends React.Component {
    state = {
      currentLevel: 0,
      currentTree: null
    }

    componentDidMount() {
      this.setState({currentTree: this.props.menuTree})
    }

    setCurrentTreeAndLevel(currentTree, currentLevel) {
      this.setState({
        currentLevel, currentTree
      })
    }

    render() {
      const {currentLevel, currentTree} = this.state;
      const fn = this.setCurrentTreeAndLevel.bind(this);
      if (currentLevel == 0) {
        return <div>{
          this.props.menuTree.map(el => MenuItem0(el, fn))
          }</div>
      } else if () {
        // title and items
      } else if () {
        // title and items

      }

    }
}
