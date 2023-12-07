import classes from './CartItem.module.css';

const CartItem = (props) => {
    const price = `$${props.item.price.toFixed(2)}`

    return (
        <li className={classes.cart}>
            <div>
                <h2>{props.item.name}</h2>
                <div className={classes.summary}>
                    <div className={classes.price}>{price}</div>
                    <div className={classes.amount}>{props.item.amount}</div>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    )
};

export default CartItem;