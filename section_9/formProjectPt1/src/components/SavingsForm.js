import React, {useState} from 'react';
import classes from './SavingsForm.module.css';

const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
}

const SavingsForm = (props) => {
    const [userInput, setUserInput] = useState({
        'current-savings': 10000,
        'yearly-contribution': 1200,
        'expected-return': 7,
        'duration': 10
    })

    const submitHandler = (event) => {
        event.preventDefault();
        
        props.onCalculate(userInput);
    };

    const resetHandler = () => {
        setUserInput(initialUserInput);
    };

    const inputChangeHandler = (input, value) => {
        setUserInput((previousInput) => {
            return {
                ...previousInput,
                [input]: +value, //the "+" converts the string value to a number
            }
        });
    };    


    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input onChange={(event) => inputChangeHandler('current-savings', event.target.value)} value={userInput['current-savings']} type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} value={userInput['yearly-contribution']} type="number" id="yearly-contribution" />
                </p>

            </div>

            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input onChange={(event) => inputChangeHandler('expected-return', event.target.value)} value={userInput['expected-return']} type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event) => inputChangeHandler('duration', event.target.value)} value={userInput['duration']} type="number" id="duration" />
                </p>
            </div>
                <p className={classes.actions}>
                <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
                </p>
      </form>

      
    );
};

/* Todo: Show below table conditionally (only once result data is available) */
/* Show fallback text if no data is available */

export default SavingsForm;