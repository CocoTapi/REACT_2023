import ExpenseItem from "./components/ExpenseItem";

function App() {
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


  return (
    <div>
      <h2>Our Expense for a Month</h2>
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
    </div>
  );
}

export default App;
