import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (options) => `products?${options}`,
    }),
    getCategories: builder.query({
      query: () => "/products/categories",
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productsApi;
