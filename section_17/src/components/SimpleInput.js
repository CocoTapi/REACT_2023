import { useState } from 'react';

const SimpleInput = (props) => {
  //const nameInputRef = useRef('');
  const [enteredName, setEnteredName] = useState('');
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  let formIsValid = false;

  if(enteredNameIsValid) {
    formIsValid = true;
  }
  // useEffect(() => {
  //   if(enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }; 

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    //nameInputRef.current.value = ''; => Not IdleDeadline. Don't manipulate the dom!
    setEnteredName('');
    setEnteredNameTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid 
    ? 'form-control invalid' 
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          // ref={nameInputRef} 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName} 
        />
        { nameInputIsInvalid && <p className='error-text'>Name must not be enpty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
