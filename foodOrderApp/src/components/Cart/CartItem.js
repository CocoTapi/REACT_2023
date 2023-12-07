import classes from './CartItem.module.css';

const CartItem = (props) => {
    return (
        <div className={classes.cart}>
            <h2>{props.item.name}</h2>
            <div className={classes.summary}>
                <div className={classes.price}>{props.item.price}</div>
                <div className={classes.amount}>{props.item.amount}</div>
            </div>
            <div>
                <button>-</button>
                <button>+</button>
            </div>
        </div>
    )
};

export default CartItem;