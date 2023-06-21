import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

import "./Expenses.css";



function Expenses(props) {
  //for updating states  
    const [filteredYear, setFilteredYear] = useState('2020');

    let filterInfoText = '2019, 2021 & 2022';

    if (filteredYear === '2019') {
      filterInfoText = '2020, 2021 & 2022';
    } else if (filteredYear === '2020') {
      filterInfoText = '2019, 2021 & 2022';
    } else {
      filterInfoText = '2019, 2020 & 2022';
    }

    const filterChangeHandler = selectedYear => {
        console.log('Expenses.js');
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter( expense => {
      console.log(props.items)
      const expenseYear = expense.date.getFullYear().toString();
      console.log(`Expense Year: ${expenseYear}, Filtered Year: ${filteredYear}`)
      return expenseYear === filteredYear
    })
    
    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
      expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem 
          key={expense.id} 
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date} />
      ))
    }
            

    return (
      <div>
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
          <p>Data for years {filterInfoText} is hidden.</p>
          <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
          <ExpensesList items={filteredExpenses}></ExpensesList>
        </Card>
      </div>
    );
  }
  
  export default Expenses;

  /* line 32: selected={filteredYear} is for default. In ExpenseFilter,js, add value in <select>*/

  