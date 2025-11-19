import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.js";
import cartReducer from "./slice.js";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});
