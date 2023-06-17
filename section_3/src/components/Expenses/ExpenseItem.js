
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


function ExpenseItem(props) {
    const {title, amount, date} = props.item;

    return (
    //changed <div> to <Card>
    <Card className="expense-item"> 
        <ExpenseDate date={date}></ExpenseDate>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${amount}</div>
        </div> 
        <button>Change Title</button>
    </Card>
    )
}

export default ExpenseItem;