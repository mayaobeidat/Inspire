import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: JSON.parse(localStorage.getItem('wishlist')) || [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(item => item.id === product.id);
      if (!existingProduct) {
        state.items.push(product);
        localStorage.setItem('wishlist', JSON.stringify(state.items));
      }
    },
    removeFromWishlist: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
      localStorage.setItem('wishlist', JSON.stringify(state.items));
    },
    loadWishlist: (state) => {
      state.items = JSON.parse(localStorage.getItem('wishlist')) || [];
    }
  },
});

export const { addToWishlist, removeFromWishlist, loadWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
