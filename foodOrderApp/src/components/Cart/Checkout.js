import { useRef } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const cityInputRef = useRef();
    const stateInputRef = useRef();
    const postalInputRef = useRef();

    const isEmpty = (value) => value.trim().length === '';
    const isFiveChars = (value) => value.trim().length === 5;


    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredState = stateInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;

        const enteredNameIsValud = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredStateIsValid = !isEmpty(enteredState);
        const enteredPostalIsValid = isFiveChars(enteredPostal);
    }

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='state'>State</label>
                <input type='text' id='state' ref={stateInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef} />
            </div>
            <div className={classes.actions}>
                <button onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
};

export default Checkout;