import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = {
    items: [],
    totalAmount: 0
}; 

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        
    }
}

export const CartContextProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState);

    const addFoodtoCartHandler = (item) => {
        dispatchCart({type: 'ADD', item: item});
    };

    const removeFoodFromCartHandler = (id) => {
        dispatchCart({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addCart: addFoodtoCartHandler, 
        removeCart: removeFoodFromCartHandler
    };

    return (
        <CartContext.Provider
            value={cartContext}
        >
            {props.children}
        </CartContext.Provider>
    )
}