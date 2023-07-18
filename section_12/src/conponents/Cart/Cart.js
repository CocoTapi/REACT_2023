import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItem = (
        <ul className={classes['cart-items']}>{[
            {id: 'm1', name: 'Pork Fillet'},
            ].map((item) => <li>{item.name}</li>)} 
        </ul> 
    )

    return (
        <div>
            {cartItem}
            <div>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    )
}

export default Cart;