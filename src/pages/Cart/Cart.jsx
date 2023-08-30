import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addCartItemsAndPrice } from "../../features/order-details/orderDetails";

import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import CartProduct from "../../components/cart-product/CartProduct";
import ItemsAndPriceTotal from "../../components/items-and-price-total/ItemsAndPriceTotal";

import getTotalItemsInCart from "../../util/getTotalItemsInCart";
import getTotalCartPrice from "../../util/getTotalCartPrice";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const totalItems = getTotalItemsInCart(cart);
  const totalPrice = getTotalCartPrice(cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <h2 className="text-xl font-bold  self-start">My Bag</h2>
        {cart?.map((item) => (
          <CartProduct key={item.id} item={item} />
        ))}
      </div>
    );
  }

  function handleCheckoutClick() {
    dispatch(
      addCartItemsAndPrice({ items: [...cart], totalItems, totalPrice })
    );
    navigate("/order/address");
  }

  return (
    <div className="max-w-7xl m-auto p-3 sm:p-5  md:flex md:gap-5">
      {content}

      <div className="w-full h-fit md:max-w-sm mt-5 md:mt-0">
        <h2 className="text-xl font-bold leading-none">Total</h2>

        <ItemsAndPriceTotal />

        {/* <Link to="/order/address"> */}
        <button
          type="button"
          className="btn btn-success w-full"
          onClick={handleCheckoutClick}
        >
          CHECKOUT
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Cart;
