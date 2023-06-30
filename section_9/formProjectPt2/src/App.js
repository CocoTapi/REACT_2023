import React, {useState} from 'react';

import SavingsForm from './components/SavingsForm';
import ResultTable from './components/ResultTable';
import Header from './components/Heeader/Header';

function App() {
  const [savingsList, setSavingsList] = useState();

  const storingHandler = (savings) => {
    setSavingsList(savings)
  }
  
  return (
    <div>
      <Header></Header>

      <SavingsForm onFormSubmit={storingHandler}></SavingsForm>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultTable storedData={savingsList}></ResultTable>
    </div>
  );
}

export default App;
