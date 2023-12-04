import React, { useState } from "react";

//import Button from "../UI/Button";

const MealItem = ({item, onClick, amount}) => {
    const [eachItemAmount, setEachItemAmount] = useState(0);

    const addFoodHandler =() => {
      setEachItemAmount(eachItemAmount + 1);
    }  

    return (
        <div>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{`$${item.price}`}</div>
            <div>
                <div>Amount</div>
                <div>{eachItemAmount}</div>
            </div>
            <button onClick={addFoodHandler}>+ ADD</button>
        </div>
    )
};

export default MealItem;