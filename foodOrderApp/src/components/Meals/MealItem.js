import React from "react";

//import Button from "../UI/Button";
import MealItemForm from "./MealItemForm";
import classes from './MealItem.module.css';

const MealItem = (props) => {
    return (
        <li>
            <div className={classes.meal}>
                <h3>{props.item.name}</h3>
                <div className={props.description}>{props.item.description}</div>
                <div className={props.item.price}>{`$ ${props.item.price.toFixed(2)}`}</div>
                <MealItemForm id={props.item.id} /> 
            </div>
        </li>
    )
};

export default MealItem;