// src/features/products/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    categories: [],
    selectedCategory: JSON.parse(localStorage.getItem('selectedCategory')) || null,
    products: [],
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
      localStorage.setItem('selectedCategory', JSON.stringify(action.payload));
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    // Other reducers as needed
  },
});

export const { setCategories, selectCategory, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
