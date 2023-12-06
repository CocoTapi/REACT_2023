import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addCart: (item) => {},
    removeCart: () => {}
});

export default CartContext;

