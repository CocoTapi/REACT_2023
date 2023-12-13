import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/slices/cartSlice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description } = props;

  const addItemHandler = ({title, price: fixedPrice}) => {
    dispatch(cartActions.addCart({title, price: fixedPrice, amount: 1}))
  };

  const fixedPrice = price.toFixed(2)

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>{fixedPrice}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler.bind(null, {title, price: fixedPrice})}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
