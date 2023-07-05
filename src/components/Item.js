import React, { useState } from "react";

function Item({ name, category }) {
  const [addCart, setAddCart] = useState(false)
  // const addCartLi = addCart ? '' : 'in-cart'
  function handleClick() {
    setAddCart((addCart) => !addCart)
  }
  return (
    <li className={addCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={addCart ? 'remove' : 'add'}>{addCart ? "Remove from cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
