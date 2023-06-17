import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App () {
  return (
    <div>
      <NewExpense></NewExpense>
      <h2>Our Expense for a Month</h2>
      <Expenses></Expenses>
    </div>
  );
}

export default App;
