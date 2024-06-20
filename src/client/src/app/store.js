import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
import authReducer from "../api/sliceAuth";
import cartReducer from "../api/cartSlice"; 

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    cart: cartReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export default store;
