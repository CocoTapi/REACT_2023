import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";



function Expenses(props) {
  //for updating states  
    const [filteredYear, setFilteredYear] = useState('2020');

    let filterInfoText = '2019, 2021 & 2022';

    if (filteredYear === '2019') {
      filterInfoText = '2020, 2021 & 2022';
    } else if (filteredYear === '2020') {
      filterInfoText = '2019, 2021 & 2022';
    } else {
      filterInfoText = '2019, 2020 & 2021';
    }

    const filterChangeHandler = selectedYear => {
        console.log('Expenses.js');
        setFilteredYear(selectedYear);
    }

    return (
      <div>
        <Card className="expenses">
          {/* selected={filteredYear} is for default. In ExpenseFilter,js, add value in <select>*/}
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
          <p>Data for years {filterInfoText} is hidden.</p>
          {props.items.map((expense) => {
            return (
             <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
          )}
          )};

        
        </Card>
      </div>
    );
  }
  
  export default Expenses;
  