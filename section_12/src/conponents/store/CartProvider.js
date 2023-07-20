import{ useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
      const updatedItems = state.items.concat(action.item) ;
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }
    }
    return defaultCartState
}

//this is to manage data and provide it to all components that need it 
const CardProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemFromCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    };
    
    const cartContext = {
        items: cartState.items,
        totalAmount: 0,
        addItem: addItemFromCartHandler,
        removeItem: removeItemFromCartHandler,
    }
    
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CardProvider;