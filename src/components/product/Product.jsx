import React from "react";

function Product({ product }) {
  return (
    <div className="w-64 p-5 border border-black/50  flex flex-col justify-between items-center gap-5">
      <figure className="w-full h-full bg-white  flex justify-center items-center">
        <img width={120} src={product.image} alt={product.title} />
      </figure>

      <div className="w-full  flex flex-col gap-2">
        <p className="card-title line-clamp-2">{product.title}</p>
        <p className="card-title">$ {product.price}</p>
      </div>
      <button className="btn w-full rounded-none">Add to cart</button>
    </div>
  );
}

export default Product;
