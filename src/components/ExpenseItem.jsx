import "./ExpenseItem.css"

function ExpenseItem({ exp }) {
    return <div className="expense-item">
        <div>{exp.date.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{exp.title}</h2>
            <div className="expense-item__price">${exp.amount}</div>
        </div>s
    </div>;
}

export default ExpenseItem;