import React from "react";
import Button from "../UI/Button";

const Header = (props) => {
    return (
    <React.Fragment>
        <h1>Sankaku Omusubi</h1>
        <Button>Cart {props.cartNum}</Button>
    </React.Fragment>
    )
};

export default Header;