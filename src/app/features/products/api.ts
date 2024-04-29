/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/"
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (limit) => {
        if (limit) {
          return `products?limit=${limit}`;
        } else {
          return `products`;
        }
      }
    }),
    getProductByID: builder.query({
      query: (id: any) => `products/${id}`
    }),
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: "products/add",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct
      })
    }),
    updateProduct: builder.mutation({
      query: ({ id }) => ({
        url: `products/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "New Title"
        })
      })
    }),
    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `products/${id}`,
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      })
    })
  })
});

export const {
  useGetAllProductsQuery,
  useGetProductByIDQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = productAPI;
