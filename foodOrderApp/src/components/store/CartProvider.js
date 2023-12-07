import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = {
    items: [],
    totalAmount: 0
}; 

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    };
    if(action.type === 'REMOVE'){

    };
    return initialCartState;
}

const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState);

    const addItemtoCartHandler = (item) => {
        dispatchCart({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCart({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addCart: addItemtoCartHandler, 
        removeCart: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider
            value={cartContext}
        >
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;