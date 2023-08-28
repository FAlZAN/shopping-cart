import React from "react";

import {
  TrashIcon,
  PlusSmallIcon,
  MinusSmallIcon,
} from "@heroicons/react/24/outline";

import { useDispatch } from "react-redux";
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  removeFromCart,
} from "../../features/cart/cart";

function CartProduct({ item }) {
  const dispatch = useDispatch();

  function handleIncreaseProductQuantity(item) {
    dispatch(increaseProductQuantity(item));
  }

  function handleDecreaseProductQuantity(item) {
    dispatch(decreaseProductQuantity(item));
  }

  function handleRemoveFromCart(item) {
    dispatch(removeFromCart(item));
  }

  return (
    <div className="card card-bordered card-side w-full h-36">
      <figure className="w-28 p-3 mx-3 sm:p-5  flex justify-center items-center">
        <img src={item.image} alt={item.title} />
      </figure>

      <div className="w-full py-3 pr-3 sm:py-5 sm:pr-5  flex flex-col justify-between gap-3">
        <p className="line-clamp-1 lg:line-clamp-2">{item.title}</p>
        <p>$ {item.price}</p>
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="btn btn-square btn-sm"
              onClick={() => handleDecreaseProductQuantity(item)}
            >
              <MinusSmallIcon className="w-4" />
            </button>
            <p>{item.quantityInCart}</p>
            <button
              type="button"
              className="btn btn-square btn-sm"
              onClick={() => handleIncreaseProductQuantity(item)}
            >
              <PlusSmallIcon className="w-4" />
            </button>
          </div>

          <div>
            <button
              className="btn btn-square btn-sm btn-error"
              onClick={() => handleRemoveFromCart(item)}
            >
              <TrashIcon className="w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
