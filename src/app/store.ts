import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productAPI } from "./features/products/api";
import productReducer from "./features/products/productSlice";
import themeReducer from "./features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productReducer,
    [productAPI.reducerPath]: productAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
