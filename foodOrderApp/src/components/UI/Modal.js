import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} />
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal} >
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
};

const Modal = () => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />)}
            {ReactDOM.createPortal(<ModalOverlay />)}
        </Fragment>
    )
}

export default Modal;