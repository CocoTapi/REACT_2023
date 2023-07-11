import React, {useState, useRef} from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModel from '../UI/ErrorModel';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    //this refs is always an object, which always has a current prop, 
    //and the current props hollds the actual value

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }

    const addUserHandler = (event) => {
        event.preventDefault();
        //You can get the value :console.log(nameInputRef.current.value);
        
        //this is the way to use Refs to get values not useState. 
        //However, during this process, we lost our resetting logic. 
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return;
        }
        if (enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0)'
            })
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        //very rare resetting way
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        // setEnteredUsername('');
        // setEnteredAge('');
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} ></ErrorModel>}
        <Card  className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username' >Username</label>
                <input 
                    id='username' 
                    type='text' 
                    // onChange={usernameChangeHandler} 
                    // value={enteredUsername}
                    ref={nameInputRef}
                ></input>
                <label htmlFor='age'>Age (Years)</label>
                <input 
                    id='age' 
                    type='number' 
                    // onChange={ageChangeHandler} 
                    // value={enteredAge}
                    ref={ageInputRef}
                ></input>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUser;