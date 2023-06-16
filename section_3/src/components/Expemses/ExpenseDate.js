import './ExpenseDate.css';

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long'}); //long full name of the month(September)
    const day = props.date.toLocaleString('en-US', { day: '2-digit'});  //2 digit day (03)
    const year = props.date.getFullYear();

    return (
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{day}</div>
            </div>
    );
}




export default ExpenseDate;