import classes from './CartItem.module.css';

function CartItem (props) {
    return (
        <div className={classes.cart}>
            <h2>item name</h2>
            <div className={classes.summary}>
                <div className={classes.price}>$25</div>
                <div className={classes.amount}>x 1</div>
            </div>
            <div>
                <button>-</button>
                <button>+</button>
            </div>
        </div>
    )
};

export default CartItem;