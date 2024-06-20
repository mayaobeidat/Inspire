import { createSlice, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (item) => {
        const cartItemId = nanoid();
        return { payload: { ...item, cartItemId } };
      },
    },
    removeFromCart: (state, action) => {
      const cartItemId = action.payload;
      state.items = state.items.filter((item) => item.cartItemId !== cartItemId);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

