//import Button from "../UI/Button";
import { Fragment, useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from './CartList.module.css';
import CartContext from "../store/cart-context";
import Checkout from "./Checkout";

const CartList = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
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

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://react-http-d316b-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
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

    const cartModalContent = (
        <Fragment>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
            {!isCheckout && modalActions}
        </Fragment>
    );

    const isLoadingContent = (
        <p>Checking out...</p>
    )

    const completeSubmittionContent = (
        <Fragment>
             <p>Thank you for your order!</p>
             <div className={classes.actions}>
            <button 
                className={classes['button-alt']} onClick={props.onClose}>
                    Close
                </button>
        </div>
        </Fragment>
    )

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isLoadingContent}
            {!isSubmitting && didSubmit && completeSubmittionContent}      
        </Modal>
    )
};

export default CartList;