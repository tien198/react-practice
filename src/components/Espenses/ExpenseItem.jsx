import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const name = new Date();

function ExpenseItem({ exp }) {
  // const [title, setTitle] = useState(exp.title);
  // function clickedHandler() {
  // setTitle('updated!');
  // console.log(title);
  // };
  return (
    <li>
      <Card className="expense-item">
        {/* <div>{exp.date.toISOString()}</div> */}
        <ExpenseDate date={exp.date} />
        <div className="expense-item__description">
          <h2>{exp.title}</h2>
          <div className="expense-item__price">${exp.amount}</div>
        </div>
        {/* <button onClick={clickedHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
