import React, { useState } from "react";
import Button from "../UI/Button";

const Header = () => {
    const [cartNum, setCartNum] = useState(0);

    return (
    <React.Fragment>
        <h1>Sankaku Omusubi</h1>
        <Button>Cart {cartNum}</Button>
    </React.Fragment>
    )
};

export default Header;