import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    items: [],
    totalQuantity: 0,
    changed: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action){
            state.totalQuantity++;
            const newItem = action.payload;
            const existingItem = state.items.find(
                item => item.id === newItem.id
            );
            state.changed = true;
            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action){
            state.totalQuantity--;
            const id = action.payload;
            const existingItem = state.items.find(
                item => item.id === id 
            );
            state.changed = true;
            if(existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            } 
        },
    }
});


export default cartSlice.reducer;

export const cartActions = cartSlice.actions;