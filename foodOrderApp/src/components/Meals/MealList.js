import React from "react";

import MealItem from "./MealItem";
import Card from "../UI/Card";
import classes from './MealList.module.css';

const MealList = ({ data }) => {
    let content;
    content = data.map((item) => {
        return <MealItem key={item.id} item={item} />
        
    })
    
    return (
        <Card>
            <section className={classes.meals}>
                <ul>
                    {content}
                </ul>
            </section>
        </Card>
    )
};

export default MealList;