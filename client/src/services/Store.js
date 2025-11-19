import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.js";

export const Store = configureStore({
  reducer: { 
    products: productReducer,
  },
});
