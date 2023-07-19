import CartContext from './cart-context';


//this is to manage data and provide it to all components that need it 
const CardProvider = (props) => {
    const addItemFromCartHandler = (id) => {};

    const removeItemFromCartHandler = (id) => {};
    
    const cartContext = {
        item: [],
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