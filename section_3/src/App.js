import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App () {
  const addExpenseHandler = expense => {
    console.log("In App.js");
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <h2>Our Expense for a Month</h2>
      <Expenses></Expenses>
    </div>
  );
}

export default App;
