import React from 'react';

const ResultTable = (props) => {
    return (
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yearData) => {
            <tr>
              <td> {yearData.year} </td>
              <td> {yearData.savingsEndOfYear} </td>
              <td> {yearData.yearlyInterest} </td>
              <td> {yearData.savingsEndOfYear - INITIAL INVESTMENT - yearData.yearlyContribution * yearData.year} TOTAL INTEREST GAINED</td>
              <td>TOTAL INVESTED CAPITAL</td>
            </tr>
          })}
          
        </tbody>
      </table>
    )
}

export default ResultTable; 