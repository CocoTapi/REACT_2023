import React, { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
    //for animation
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    //cart button content re-evaluated by react whenever the context changes and
    //when we updated it in the cart provider
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems =  items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0)

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
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