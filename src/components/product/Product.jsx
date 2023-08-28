import React from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cart";

function Product({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart(item) {
    console.log(item);
    dispatch(addToCart({ ...item, quantityInCart: 1 }));
  }

  return (
    <div className="card card-bordered p-3 lg:p-5 flex flex-col justify-between items-center gap-3 lg:gap-5">
      <figure className="w-full h-full bg-white  flex justify-center items-center">
        <img className="w-28" src={product.image} alt={product.title} />
      </figure>

      <div className="w-full  flex flex-col gap-2">
        <p className="line-clamp-1 sm:line-clamp-2">{product.title}</p>
        <p className="">$ {product.price}</p>
      </div>

      <button className="btn w-full" onClick={() => handleAddToCart(product)}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
