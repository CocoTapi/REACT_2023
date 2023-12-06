import React from "react";

//import Button from "../UI/Button";
import MealItemForm from "./MealItemForm";
import classes from './MealItem.module.css';

const MealItem = ({item, onClick, amount}) => {
    return (
        <li>
            <div className={classes.meal}>
                <h3>{item.name}</h3>
                <div className={classes.description}>{item.description}</div>
                <div className={classes.price}>{`$ ${item.price.toFixed(2)}`}</div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )
};

export default MealItem;