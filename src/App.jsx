import Expenses from "./components/Espenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import './App.css';
import { useState } from "react";


const DATA_INIT = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
];


function App() {
  // const par = document.createElement('p');
  // par.textContent = 'Parameters Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem tenetur quae earum facere laborum cupiditate beatae quos suscipit quo quis, quia, a quidem et qui. Officia corrupti eveniet laboriosm';
  // document.getElementById('root').append(par);

  const [expenses, setExpenses] = useState(DATA_INIT)

  function addExpense(expense) {
    const expenseNew = {
      id: Math.random().toString(),
      ...expense
    }
    setExpenses(prev => {
      return [expenseNew, ...prev];
    });
  }

  return (
    <div>
      <h1>Let get started!</h1>
      <NewExpenses saveExpenseHander={addExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
