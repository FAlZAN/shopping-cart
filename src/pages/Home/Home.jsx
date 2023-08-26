import React from "react";
// query hook
import { useGetProductsQuery } from "../../services/products";
// component
import Product from "../../components/product/Product";

import { useSelector } from "react-redux";

function Home() {
  const { data: products, error, isLoading } = useGetProductsQuery("limit=10");
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);

  let content;

  if (isLoading) {
    content = (
      <div className="h-screen  flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  } else {
    content = (
      <div className="m-auto p-3 sm:p-5 max-w-7xl  grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xs:gap-3">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Home;
