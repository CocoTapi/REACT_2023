import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import "./Expenses.css";

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

    return (
      <Card className="expenses">
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
  