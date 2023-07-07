import React, {useState} from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card'
import Button from '../UI/Button'

const AddUser = (props) => {
    const [enteredUser, setEnteredUser] = useState({
    });

    const inputChangeHandler = (input, value) => {
        setEnteredUser( (previousUserList) => {
           if (value.length < 1) {
            return <p>Please enter valid username and age</p>
           } else {
            return {
                ...previousUserList,
                [input]: value
            }
           }
        }

        );
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUser);

        props.onAddNewUser(enteredUser);
    }

    return (
        <Card  className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username' >Username</label>
                <input id='username' type='text' onChange={(event) => inputChangeHandler('username', event.target.value)} value={enteredUser['username']}></input>
                <label htmlFor='age'>Age</label>
                <input id='age' type='number' min='1' max='99' onChange={(event) => inputChangeHandler('age', event.target.value)} value={enteredUser['age']}></input>
                <Button type='submit' onClick={addUserHandler}>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;