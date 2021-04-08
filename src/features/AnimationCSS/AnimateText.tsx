import "./AnimateText.module.css"
import React, { useState } from "react"

import produce from "immer"
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

var ReactCSSTransitionGroup = require('react-transition-group/CSSTransitionGroup') // ES5 with npm


export const AnimateText = () => {
  const [myState, updateMyState] = useState({ items: ['hello', 'world', 'click', 'me'] })

  const handleAdd = () => {
    let userInput: string | null = prompt('Please enter your name.', "")
    const newItems = myState.items.concat(userInput!)
    updateMyState({ items: newItems })
  }

  const handleRemove = (index: number) => {
    let newItems = myState.items.slice();
    newItems.splice(index, 1);
    updateMyState({ items: newItems })
  }
  const items = myState.items.map((item, i) => (
    <div
      key={i}
      onClick={() => handleRemove(i)}>
      {item}
    </div>
  ));

  return (
    <div>
      <button onClick={handleAdd}>Add Item</button>
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={5500}
        transitionLeaveTimeout={5300}>
        {items}
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default AnimateText