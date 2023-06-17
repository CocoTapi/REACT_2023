import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


function ExpenseItem(props) {
    const {title, amount, date} = props.item;
    const [newTitle, setTitle] =  useState(title);
    //must be inside a function. This lead the function calls again 
    //useState(tutle: This is something that is shown before clicking and something that you want to update)
   
    const clickHandler = () => {
        //shows "Updated" on the screen 
        setTitle('Updated');
        //setTitle('Updated': This is what you want to show after clicking)
        console.log(newTitle);
    };

    return (
    //changed <div> to <Card>
    <Card className="expense-item"> 
        <ExpenseDate date={date}></ExpenseDate>
        <div className="expense-item__description">
            <h2>{newTitle}</h2>
            <div className="expense-item__price">${amount}</div>
        </div> 
        <button onClick={clickHandler}>Change Title</button>
    </Card>
    )
}

export default ExpenseItem;