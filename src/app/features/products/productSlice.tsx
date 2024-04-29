/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    limit: 0,
    newAddedProduct: JSON.stringify(localStorage.getItem("newAdded")) || {},
    newUpdate: JSON.stringify(localStorage.getItem("newUpdate")) || {}
  },
  reducers: {
    listOfAllProducts: (state, action) => {
      state.products = action.payload;
    },
    currentLimit: (state, action) => {
      state.limit = action.payload;
    },
    newAdded: (state, action) => {
      localStorage.setItem("newAdded", JSON.stringify(action.payload));
      // state.newAddedProduct = action.payload;
    },
    newUpdate: (state, action) => {
      localStorage.setItem("newUpdate", JSON.stringify(action.payload));
      // state.newAddedProduct = action.payload;
    }
  }
});
export const { listOfAllProducts, currentLimit, newAdded, newUpdate } =
  productSlice.actions;
export default productSlice.reducer;
