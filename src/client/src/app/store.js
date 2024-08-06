import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
import authReducer from "../api/sliceAuth";
import cartReducer from "../api/cartSlice"; 
import wishlistReducer from "../api/wishlistSlice"

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    cart: cartReducer, 
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
