
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';


function ExpenseItem(props) {
    const {title, amount, date} = props.item;

// const expenseDate = new Date(2023, 6, 15);
// const expenseTitle = "Dodger's food";
// const expenseAmount = 37.99;

    // const month = props.date.toLocalString('en-US', { month: 'long'});
    // const day = props.date.toLocalString('en-US', { day: 'long'});
    // const year = props.date.getFullYear();

    return (
    //changed <div> to <Card>
    <Card className="expense-item"> 
        <ExpenseDate date={date}></ExpenseDate>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">{amount}</div>
        </div> 
    </Card>
    )
}

export default ExpenseItem;