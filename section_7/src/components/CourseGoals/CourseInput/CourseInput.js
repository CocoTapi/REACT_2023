import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;
  }

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background: #ffd7d7;
  }

  &.invalid label {
    color: red;
  }

`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  // to manage styles if you do something invalid 
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    //make a reset function
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    //to avoid creating an empty task bar by hitting "ADD GOAL"
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={!isValid && 'invalid'}>
        <label>Course Goal</label>
        <input 
          style={{
            borderColor: !isValid ? 'red' : '#ccc', 
            background: !isValid ? 'salmon' : 'transparent'
          }} 
          type="text" 
          onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

//line 69: if there is no <FormControl> --> add this to the label: style={{color: !isValid ? 'red' : 'black'}}
//Or <FormControl className={!isValid && 'invalid'}> Nothing in <label>