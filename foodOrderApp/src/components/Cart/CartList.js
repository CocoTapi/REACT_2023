import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from './CartList.module.css';
function CartList (props) {
    return (
        <Modal>
            <div className={classes.cart}>
                <CartItem />
                <h2 className={classes.total}>Total Amount</h2>
                <div>$100</div>
                <div>
                    <Button 
                        onClick={props.onClick}
                    >
                        Close
                    </Button>
                    <Button>Order</Button>
                </div>
            </div>
        </Modal>
    )
};

export default CartList;