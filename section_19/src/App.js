import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { authActions } from './store';
import UserProfile from './components/UserProfile';


function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.isAuthenticated);
  
  const showLoginHandler = () => {
    setShowLoginForm(true)
  }

  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  const loginHandler = () => {
    dispatch(authActions.login())
  }
  return (
    <Fragment>
      <Header 
        onLogout={logoutHandler} 
        onShowLoginForm={showLoginHandler}
      />
      {!auth && <Auth />}
      {auth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
