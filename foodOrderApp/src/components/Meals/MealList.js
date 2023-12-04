import React from "react";

import MealItem from "./MealItem";
import Card from "../UI/Card";

const MealList = ({ data }) => {
    let content;
    content = data.map((item) => {
        return <MealItem key={item.id} item={item} />
        
    })
    
    return (
        <Card>{content}</Card>
    )
};

export default MealList;