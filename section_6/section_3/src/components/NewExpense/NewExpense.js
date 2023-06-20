import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
    // console.log(expenseData);

    // this communicate with App.js
    props.onAddExpense(expenseData);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    return (
    <div className='new-expense'>
        <button onClick={startEditingHandler}>Add New Expense</button>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        {/* you don't have to name onSaveExoenseData. Any name is fine */}
    </div>
    )
}

export default NewExpense;