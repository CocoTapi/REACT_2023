import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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



function App () {
  const addExpenseHandler = expense => {
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <h2>Our Expense for a Month</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
