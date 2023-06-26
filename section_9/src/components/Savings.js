import React from 'react';

const Savings = () => {
    return (
    <div className="input-group">
        <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" />
        </p>
        <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" />
        </p>
        </div> 
    )
}

export default Savings;