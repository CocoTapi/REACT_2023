//const React from 'react';

import Card from './Card';
import Button from './Button';
import classe from '/ErrorModel.module.css'

const ErrorModel = (props) => {
    return <Card>
        <header>
            <h2>{props.title}</h2>
        </header>
        <div>
            <p>{props.message}</p>
        </div>
        <footer>
            <Button>Okay</Button>
        </footer>
    </Card>

}

export default ErrorModel;