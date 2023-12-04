import React from "react";

import MealItem from "./MealItem";

const MealList = ({ data }) => {
    let content;
    content = data.map((item) => {
        return <MealItem key={item.id} item={item} />
        
    })
    
    return (
        <div>{content}</div>
    )
};

export default MealList;