import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    cartItems: [],
    showCart: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItem(state, action){
           state.cartItems = state.cartItems + action.payload;
        },
        removeItem(state, action){},
        showCart(state) {
            state.showCart = !state.showCart
        }  
    }
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;