import React, { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
    //cart button content re-evaluated by react whenever the context changes and
    //when we updated it in the cart provider
    const cartCtx = useContext(CartContext);

    const numberOfCartItems =  cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton;