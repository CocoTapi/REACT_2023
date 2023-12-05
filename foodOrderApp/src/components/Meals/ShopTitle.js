import React from "react";

import classes from './ShopTitle.module.css';

const ShopTitle = () => {
    return (
        <div className={classes.summary}>
            <h2>Handcrafted Onigiri Delights</h2>
            <h3>
                We bring the healthy japanese onigiri to life with a modern twist. 
                Our passion for making delicious rice balls is transforming fast food into a healthier delight,
                ensuring each bite a delightful experience.
            </h3>
        </div>
    )
};

export default ShopTitle;