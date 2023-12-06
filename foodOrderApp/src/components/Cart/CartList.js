import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from './CartList.module.css';

function CartList (props) {
    const cartItems = [
        { id: 'c1', name: 'sushi', amount: 2, price: 12.99 }, 
    ].map((item) => <CartItem />)

    return (
        <Modal>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.action}>
                <button className={classes['button-alt']}></button>
                <button className={classes.button}></button>
            </div>
        </Modal>
    )
};

export default CartList;