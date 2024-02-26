// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import productsReducer from '../features/products/productsSlice';


const store = configureStore({
    reducer: {
      cart: cartReducer,
      products: productsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredPaths: ['products.selectedCategory'],
        },
      }),
  });

export default store;
