import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/slices/cartSlice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const minusBtnHandler = () => {
    dispatch(cartActions.removeItemFromCart(id))
  };

  const plusBtnHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title, 
      price
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusBtnHandler}>-</button>
          <button onClick={plusBtnHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
