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

       console.log(yearlyData);
      }
    }
  
  return (
    <div>
      <Header></Header>

      <SavingsForm onCalculate={calculateHandler}></SavingsForm>

      {!userInput && <p style={{textAlign: 'center'}}>No Investment calculated yet.</p>}
      {userInput && <ResultTable data={yearlyData} initialInvestment={userInput['current-savings']}></ResultTable>}
    
    </div>
  );
}

export default App;

//currentSaving would be an initial investment