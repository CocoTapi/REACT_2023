import './ExpenseItem.css';

function ExpenseItem() {
    return (
    <div className="expense-item">
            <div>Dodger's Food</div>
        <div className="expense-item__description">
            <h2 className="expense-item">Purina One</h2>
            <div className="expense-item__price">30.99</div>
        </div> 
       
    </div>
    )
}

export default ExpenseItem;