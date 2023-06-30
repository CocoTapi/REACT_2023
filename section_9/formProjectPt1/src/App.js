import React, {useState} from 'react';
import SavingsForm from './components/SavingsForm';
import ResultTable from './components/ResultTable';
import Header from './components/Heeader/Header';

function App() {
  const [userInput, setUserInput] = useState(null)

  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  };

    const yearlyData = []; // per-year results

    if (userInput) {
      let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
      const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
      const expectedReturn = +userInput['expected-return'] / 100;
      const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
      
        yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
       });
      }
    }
  
  return (
    <div>
      <Header></Header>

      <SavingsForm onCalculate={calculateHandler}></SavingsForm>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {!userInput && <p>No Investment calculated yet.</p>}
      {userInput && <ResultTable></ResultTable>}
    
    </div>
  );
}

export default App;
