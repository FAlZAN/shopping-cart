import React from "react";

function CategoryDropdown({ selectValue, handleSelectChange, categories }) {
  return (
    <div className="mx-3 mt-3 sm:mx-5 sm:mt-5  flex items-center gap-3">
      <p>Shop by category: </p>
      <select
        name="categoriesList"
        value={selectValue}
        className="select select-bordered w-full max-w-xs"
        onChange={handleSelectChange}
      >
        <option value="all">all</option>

        {categories?.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryDropdown;
