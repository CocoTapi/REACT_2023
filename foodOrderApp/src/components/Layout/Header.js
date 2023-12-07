import React from "react";
import mealsImage from'../../assets/riceballs.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
    <React.Fragment>
        <header className={classes.header} >
            <h1>Sankaku Omusubi</h1>
            <HeaderCartButton onOpenCart={props.onOpenCart}/>
        </header>
        <div className={classes['main-image']} >
            <img src={mealsImage} alt="rice balls" />
        </div>
    </React.Fragment>
    )
};

export default Header;