import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';
import classes from './Header.module.css';

const Header = (props) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  
  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            {isAuth && <a href='/'>My Products</a>}
          </li>
          <li>
            {isAuth && <a href='/'>My Sales</a>}
          </li>
          <li>
            {isAuth && <button onClick={logoutHandler}>Logout</button>}
            {!isAuth && <button onClick={props.onShowLoginForm}>Login</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
