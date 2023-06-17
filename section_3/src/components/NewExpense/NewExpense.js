import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    };
    console.log(expenseData);
}

    return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        {/* you don't have to name onSaveExoenseData. Any name is fine */}
    </div>
    )
}

export default NewExpense;