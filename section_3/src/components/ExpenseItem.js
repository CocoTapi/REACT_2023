import './ExpenseItem.css';

function ExpenseItem(props) {
    const {title, amount, date} = props.item;

// const expenseDate = new Date(2023, 6, 15);
// const expenseTitle = "Dodger's food";
// const expenseAmount = 37.99;

    return (
    <div className="expense-item">
            <div>{date.toDateString()}</div>
        <div className="expense-item__description">
            <h2 className="expense-item">{title}</h2>
            <div className="expense-item__price">{amount}</div>
        </div> 
       
    </div>
    )
}

export default ExpenseItem;