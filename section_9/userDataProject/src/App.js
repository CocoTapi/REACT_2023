import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';

function App() {
  const [userInput, setUserInput] = useState(null);

  const addUserHandler = () => {
    setUserInput();
  }

  return (
    <div>
      <AddUser onAddNewUser={addUserHandler}></AddUser>
    </div>
  );
}

export default App;
