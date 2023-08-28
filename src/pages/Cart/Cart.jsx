import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import { useSelector } from "react-redux";

import CartProduct from "../../components/cart-product/CartProduct";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const totalItemsInCart = totalItems(cart);
  const totalPriceOfCart = Math.ceil(totalCartPrice(cart));
  console.log(cart);

  function totalItems(array) {
    let totalItems = 0;
    array.forEach((element) => {
      totalItems += element.quantityInCart;
    });
    return totalItems;
  }

  function totalCartPrice(array) {
    let subTotal = 0;
    array.forEach((element) => {
      subTotal += element.quantityInCart * element.price;
    });
    return subTotal;
  }

  let content;
  if (cart.length === 0) {
    content = (
      <div className="w-full h-40 md:text-2xl  flex flex-col justify-center items-center gap-3">
        <ShoppingBagIcon className="w-16 text-black/50" />
        <p>Your shopping bag is empty.</p>
      </div>
    );
  } else {
    content = (
      <div className="w-full  flex flex-col items-center gap-5">
        <h2 className="text-xl font-bold  self-start">MY BAG</h2>
        {cart?.map((item) => (
          <CartProduct key={item.id} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-7xl m-auto p-3 sm:p-5  md:flex md:gap-5">
      {content}

      <div className="w-full md:max-w-sm h-36 mt-5 md:mt-0  flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold self-start">TOTAL</h2>

          <span className="divider -my-[1px]"></span>

          <ul className="py-3 mb-[1px]">
            <li className="flex justify-between">
              <p className="font-bold">Item's</p>
              <p>( {totalItemsInCart} )</p>
            </li>
            <li className="flex justify-between">
              <p className="font-bold">Subtotal</p>
              <p>$ {totalPriceOfCart}</p>
            </li>
          </ul>
        </div>

        <button type="button" className="btn w-full">
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default Cart;
