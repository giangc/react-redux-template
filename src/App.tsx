// import { TransitionGroup } from "react-transition-group";
// import { CSSTransition } from "react-transition-group";
// import TransitionGroup from 'react-transition-group/TransitionGroup';
// import CSSTransition from 'react-transition-group/CSSTransition';
import React, { useState } from 'react';
import './App.css';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

const App = () => {

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
    <CSSTransition
      key={i}
      classNames="example"
      timeout={{ enter: 500, exit: 300 }}
    >
      <div onClick={() => handleRemove(i)}>
        {item}
      </div>
    </CSSTransition>
  ));

  return (
    <div className="App">
      <button onClick={handleAdd}>Add Item</button>
      <TransitionGroup>
        {items}
      </TransitionGroup>
    </div>
  );
}

export default App;
