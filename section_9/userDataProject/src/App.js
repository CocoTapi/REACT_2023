import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [userInput, setUserInput] = useState(null);

  const addUserHandler = (userInput) => {
    setUserInput(userInput);
  }

  return (
    <div>
      <AddUser onAddNewUser={addUserHandler}></AddUser>
      <UsersList users={[]}></UsersList>
    </div>
  );
}

export default App;
