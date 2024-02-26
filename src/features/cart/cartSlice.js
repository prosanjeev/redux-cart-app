// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadCartState = () => {
    try {
        const cartState = localStorage.getItem('cart');
        if (cartState) {
            return JSON.parse(cartState);
        }
    } catch (error) {
        // Handle errors
    }
    return {
        items: [],
        totalPrice: 0,
        totalItems: 0,
    };
};

const saveCartState = (state) => {
    try {
        const cartState = JSON.stringify(state);
        localStorage.setItem('cart', cartState);
    } catch (error) {
        // Handle errors
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: loadCartState(),
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }

            state.totalPrice = parseFloat((state.totalPrice + newItem.price).toFixed(2));
            state.totalItems++;
            saveCartState(state);
        },
        removeFromCart: (state, action) => {
            const removedItemId = action.payload;
            const removedItem = state.items.find(item => item.id === removedItemId);

            if (removedItem) {
                state.items = state.items.filter(item => item.id !== removedItemId);
                state.totalPrice = parseFloat((state.totalPrice - (removedItem.price * removedItem.quantity)).toFixed(2));
                state.totalItems -= removedItem.quantity;
                saveCartState(state); // Make sure to save the updated cart state in localStorage
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            const diff = quantity - item.quantity;
            item.quantity = quantity;
            state.totalPrice = parseFloat((state.totalPrice + (item.price * diff)).toFixed(2));
            state.totalItems += diff;
            saveCartState(state);
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
