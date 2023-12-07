//import Button from "../UI/Button";
import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from './CartList.module.css';
import CartContext from "../store/cart-context";

const CartList = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItems =cartCtx.items.map((item) => 
        <CartItem 
            key={item.id} 
            item={item} 
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
    );

    const cartItemRemoveHandler = (id) => {

    };

    const cartItemAddHandler = (item) => {
    
    };

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>} 
            </div>
        </Modal>
    )
};

export default CartList;