import React from 'react';
import ReactDom from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModel.module.css'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>
};

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal} >
            <header className={classes.header} >
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content} >
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions} >
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
}

const ErrorModel = (props) => {
    return (
    <React.Fragment>
        {ReactDom.createPortal(
            <Backdrop onConfirm={props.onConfirm}></Backdrop>, 
            document.getElementById('backdrop-root')
        )}
        {ReactDom.createPortal(
            <ModalOverlay
                title={props.message}
                message={props.message}
                onConfirm={props.onConfirm}
            ></ModalOverlay>,
            document.getElementById('overlay-root')
        )

        }
    </React.Fragment>
    )

}

export default ErrorModel;