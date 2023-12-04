import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

function CartList (props) {
    return (
        <Modal>
            <CartItem />
            <h2>Total Amount</h2>
            <div>$100</div>
            <div>
                <Button onClick={props.onClick}>Close</Button>
                <Button>Order</Button>
            </div>
        </Modal>
    )
};

export default CartList;