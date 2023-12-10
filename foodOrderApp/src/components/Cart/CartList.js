//import Button from "../UI/Button";
import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from './CartList.module.css';
import CartContext from "../store/cart-context";
import Checkout from "./Checkout";

const CartList = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const orderBtnHandler = () => {
        setIsCheckout(true);
    }

    const submitOrderHandler = (userData) => {
        fetch('https://react-http-d316b-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
    };

    const cartItems =cartCtx.items.map((item) => 
        <CartItem 
            key={item.id} 
            item={item} 
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
    );

    const modalActions = (
        <div className={classes.actions}>
            <button 
                className={classes['button-alt']} onClick={props.onClose}>
                    Close
                </button>
            {hasItems && (
                <button className={classes.button} onClick={orderBtnHandler}>
                    Order
                </button>
            )} 
        </div>
    );

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
            {!isCheckout && modalActions}
        </Modal>
    )
};

export default CartList;