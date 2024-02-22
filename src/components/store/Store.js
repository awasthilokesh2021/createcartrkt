import { configureStore } from "@reduxjs/toolkit";
import  productData  from "../features/cartSlice";


const store = configureStore({
   reducer: {
      cartdata:productData
   },
});

export default store;