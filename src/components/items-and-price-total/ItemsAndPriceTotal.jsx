import React from "react";

import { useSelector } from "react-redux";

import getTotalItemsInCart from "../../util/getTotalItemsInCart";
import getTotalCartPrice from "../../util/getTotalCartPrice";

function ItemsAndPriceTotal() {
  const cart = useSelector((state) => state.cart.items);
  const totalItemsInCart = getTotalItemsInCart(cart);
  const totalPriceOfCart = getTotalCartPrice(cart).toFixed(2);

  return (
    <ul>
      <li className="flex justify-between">
        <p>Item's</p>
        <p>({totalItemsInCart})</p>
      </li>
      <li className="flex justify-between">
        <p>Total</p>
        <p>$ {totalPriceOfCart}</p>
      </li>
    </ul>
  );
}

export default ItemsAndPriceTotal;
