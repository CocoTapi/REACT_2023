import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    };
    // console.log(expenseData);

    // this communicate with App.js
    props.onAddExpense(expenseData);
}

    return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        {/* you don't have to name onSaveExoenseData. Any name is fine */}
    </div>
    )
}

export default NewExpense;