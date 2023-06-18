import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const expenses = [
    {
      title: "Dodger's Food",
      amount: 37.99,
      date: new Date(2023, 6, 15)
    },
    {
      title: "Shiori's Drink",
      amount: 10.99,
      date: new Date(2023, 6, 15)
    },
    {
      title: "Zack's Candy",
      amount: 10.99,
      date: new Date(2023, 6, 15)
    },
    {
      title: "Meat",
      amount: 40.99,
      date: new Date(2023, 6, 15)
    }
  ]


function Expenses(props) {
  //for updating states  
  const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        console.log('Expenses.js');
        setFilteredYear(selectedYear);
    }

    return (
      <Card className="expenses">
        {/* selected={filteredYear} is for default. In ExpenseFilter,js, add value in <select>*/}
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
        <ExpenseItem
          item={expenses[0]}
        ></ExpenseItem>
        <ExpenseItem
        item={expenses[1]}
        ></ExpenseItem>
        <ExpenseItem 
        item={expenses[2]}
        ></ExpenseItem>
        <ExpenseItem 
        item={expenses[3]}
        ></ExpenseItem>
      </Card>
    );
  }
  
  export default Expenses;
  