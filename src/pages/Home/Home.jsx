import React, { useState } from "react";
// query hook
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../../services/products";
// component
import Product from "../../components/product/Product";
import CategoryDropdown from "../../components/category-dropdown/categoryDropdown";

function Home() {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const {
    data: categories,
    error: errorOfCategories,
    isLoading: isLoadingOfCategories,
  } = useGetCategoriesQuery();
  const [selectValue, setSelectValue] = useState("all");
  const productsByCategory = products?.filter(
    (product) => product.category === selectValue
  );

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
        {selectValue === "all"
          ? products?.map((product) => (
              <Product key={product.id} product={product} />
            ))
          : productsByCategory?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
      </div>
    );
  }

  function handleSelectChange(event) {
    setSelectValue(event.target.value);
  }

  return (
    <section>
      <CategoryDropdown
        selectValue={selectValue}
        handleSelectChange={handleSelectChange}
        categories={categories}
      />

      {content}
    </section>
  );
}

export default Home;
