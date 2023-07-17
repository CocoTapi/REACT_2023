import React, { Fragment } from 'react';

import classes from './Header.module.css';
import entranceImage from '../../assets/entrance.jpg';

const Header = (props) => {
    return (
        <Fragment>
            <heafer className={classes.heafer}>
                <h1>Katsu-tei Hirosaki</h1>
                <button>Cart</button>
            </heafer>
            <div className={classes['main-image']}>
                <img src={entranceImage} alt='Katsu-tei entrance'></img>
            </div>
        </Fragment>

    )
}

export default Header;