import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //this tells React that adter every login component function execution, 
  //it will return this useState function but only if either 
  //serFormIsValid, enteredEmail, or enteredPassword changed  
  useEffect( () => {
     //prevent from sending requests for all keystroke
     //as long as typing, the clock won't start. When people stop typing the clock starts. 
     //this runs a half second after the user stop tiping and the very first time when you start the app
     const identifier = setTimeout(() => {
      console.log("checking form validity!")
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
     }, 500);
   
     //cleanup function.This runs before every new sideEffect function execution 
     //doesn't run the very first time when you start the app.
     return () => {
      console.log("CLEANUP")
      clearTimeout(identifier);
     };
  }, [setFormIsValid, enteredEmail, enteredPassword])
  //you can omit the first dependency: "setFormISValid". 

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
