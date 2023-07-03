import React, {useState} from 'react';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [newUser, setNewUser] = useState({
        'username': "Hanako Yamada",
        'age': 20
    });

    const inputChangeHandler = (input, value) => {
        setNewUser( (previousUserList) => {
            return {
                ...previousUserList,
                [input]: value
            }
        }

        );
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(newUser);

        props.onAddNewUser(newUser);
    }

    return (
        <form onSubmit={addUserHandler} className={classes.form}>
            <label htmlFor='username' >Username</label>
            <input id='username' type='text' onChange={(event) => inputChangeHandler('username', event.target.value)} value={newUser['username']}></input>
            <label htmlFor='age'>Age</label>
            <input id='age' type='number' onChange={(event) => inputChangeHandler('age', event.target.value)} value={newUser['age']}></input>
            <button type='submit' onClick={addUserHandler}>Add User</button>
        </form>
    )
}

export default AddUser;