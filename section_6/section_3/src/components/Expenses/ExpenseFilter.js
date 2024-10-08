import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };  

    return (
        <div className='expense-filter'>
            <div className='expense-filter__control'>
                <label className='expenses-filter__label'>Filter by year</label>
                <select className='expenses-filter__select' value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;

 /* line 14: value={props.selected} is for default */