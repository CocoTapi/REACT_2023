import {useContext } from "react";

//import Button from "../UI/Button";
import CartContext from "../store/cart-context";
import MealItemForm from "./MealItemForm";
import classes from './MealItem.module.css';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$ ${props.item.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.item.id,
            name: props.item.name,
            amount: amount,
            price: props.item.price
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.item.name}</h3>
                <div className={classes.description}>{props.item.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} id={props.item.id} /> 
            </div>
        </li>
    )
};

export default MealItem;