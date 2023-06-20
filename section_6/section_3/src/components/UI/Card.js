import './Card.css';

function Card(props){
    const classes = 'card ' + props.className;
    //anything that recieves className outside recieves class string 
    //className is for formatting

    return <div className={classes}>{props.children}</div>
}

export default Card;