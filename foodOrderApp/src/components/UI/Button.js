import classes from './Button.module.css';

const Button = (props, {...rest}) => {
    return (
        <button 
            className={`${classes.button} ${props.className}`} 
            {...rest} 
        >
            {props.children}
        </button>
    )
};

export default Button;