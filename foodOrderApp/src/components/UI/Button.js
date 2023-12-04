import classes from './Button.module.css';

const Button = ({ className, children, ...rest }) => {
    return (
        <div>
            <button 
                className={`${classes.button} ${className}`} 
                {...rest} 
            >
                {children}
            </button>
        </div>
    )
};

export default Button;