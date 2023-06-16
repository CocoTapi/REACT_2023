import './ExpenseItem.css';

function ExpenseDate(props) {
    const month = props.date.toLocalString('en-US', { month: 'long'});
    const day = props.date.toLocalString('en-US', { day: 'long'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
        </div>
    );
}




export default ExpenseDate;