import React from "react";
import Button from "../UI/Button";

const Header = (props) => {
    return (
    <div>
        <h1>Sankaku Omusubi</h1>
        <Button 
            onClick={props.onClick}
        >
            Cart {props.cartNum}
        </Button>
    </div>
    )
};

export default Header;