import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true, 
        state: true,
        postal: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const cityInputRef = useRef();
    const stateInputRef = useRef();
    const postalInputRef = useRef();

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

        setFormInputValidity({
            name: enteredNameIsValud,
            street: enteredStreetIsValid,
            city: enteredCityIsValid, 
            state: enteredStateIsValid,
            postal: enteredPostalIsValid
        });

        console.log(formInputValidity);

        const formIsValid = 
            enteredNameIsValud &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredStateIsValid &&
            enteredPostalIsValid;
        
        if(!formIsValid) {
           return;
        }


        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity, 
            state: enteredState,
            postal: enteredPostal
        });
    }

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={`${classes.control} ${formInputValidity.name ? '' : classes.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={`${classes.control} ${formInputValidity.street ? '' : classes.invalid}`}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formInputValidity.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={`${classes.control} ${formInputValidity.city ? '' : classes.invalid}`}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputValidity.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={`${classes.control} ${formInputValidity.state ? '' : classes.invalid}`}>
                <label htmlFor='state'>State</label>
                <input type='text' id='state' ref={stateInputRef} />
                {!formInputValidity.state && <p>Please enter a valid state!</p>}
            </div>
            <div className={`${classes.control} ${formInputValidity.postal ? '' : classes.invalid}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef} />
                {!formInputValidity.postal && <p>Please enter valid a postal code!</p>}
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