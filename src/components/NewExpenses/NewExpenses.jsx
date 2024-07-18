import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

function NewExpenses({ saveExpenseHander }) {
    const [isEditing, setEditing] = useState(false);
    function onSaveExpenseHander(expense) {
        saveExpenseHander(expense);
    }
    function activeEdit(e) {
        setEditing(true);
    }

    return (
        <div className='new-expense'>
            {isEditing ?
                <ExpenseForm onSaveExpenseHander={onSaveExpenseHander} onSetEditing={setEditing} /> :
                <button onClick={activeEdit}>Add Expense</button>}
        </div>
    );
}

export default NewExpenses;