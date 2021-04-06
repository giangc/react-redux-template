import React, { useState } from "react"
import produce from "immer"

const AnimateText = () => {
  const [items, updateItems] = useState({ items: ['hello', 'world', 'click', 'me'] })

  const handleAdd = () => {
    // const newItems = this.state.items.concat([

    // ]);

    // const newItems = items.concat(items: [
    //   prompt('Enter some text')
    // ])

    // this.setState({ items: newItems });
  }

  cnost handleRemove = (index: Number) => {
    // let newItems = this.state.items.slice();
    // newItems.splice(i, 1);
    // this.setState({ items: newItems });
  }
}