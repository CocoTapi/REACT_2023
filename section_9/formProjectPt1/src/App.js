import SavingsForm from './components/SavingsForm';
import ResultTable from './components/ResultTable';
import Header from './components/Heeader/Header';

function App() {
  
  return (
    <div>
      <Header></Header>

      <SavingsForm></SavingsForm>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultTable></ResultTable>
    </div>
  );
}

export default App;
