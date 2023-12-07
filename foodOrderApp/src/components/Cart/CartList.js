//import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from './CartList.module.css';

const CartList = (props) => {
    const cartItems = [
        { id: 'c1', name: 'sushi', amount: 2, price: 12.99 }, 
    ].map((item) => <CartItem key={item.id} item={item} />)

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
};

export default CartList;