//const React from 'react';

import Card from './Card';
import Button from './Button';
import classes from '/ErrorModel.module.css'

const ErrorModel = (props) => {
    return <Card className={classes.model} >
        <header className={classes.header} >
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content} >
            <p>{props.message}</p>
        </div>
        <footer className={classes.action} >
            <Button>Okay</Button>
        </footer>
    </Card>

}

export default ErrorModel;