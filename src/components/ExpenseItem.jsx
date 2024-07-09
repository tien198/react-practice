import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const name = new Date();

function ExpenseItem({ exp }) {
  return (
    <div className="expense-item">
      {/* <div>{exp.date.toISOString()}</div> */}
      <ExpenseDate date={exp.date} />
      <div className="expense-item__description">
        <h2>{exp.title}</h2>
        <div className="expense-item__price">${exp.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
