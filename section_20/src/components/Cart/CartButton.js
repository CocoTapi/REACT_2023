import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/slices/cartSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(cartActions.showCart());
  }

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
