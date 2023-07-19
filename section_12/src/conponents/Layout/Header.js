import React, { Fragment } from 'react';

import classes from './Header.module.css';
import entranceImage from '../../assets/entrance.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <heafer className={classes.header}>
                <h1>Katsu-tei Hirosaki</h1>
                <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
            </heafer>
            <div className={classes['main-image']}>
                <img src={entranceImage} alt='Katsu-tei entrance'></img>
            </div>
        </Fragment>

    )
}

export default Header;