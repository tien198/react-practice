import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

function NewExpenses({ saveExpenseHander }) {
    function onSaveExpenseHander(expense) {
        saveExpenseHander(expense);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseHander={onSaveExpenseHander} />
        </div>
    );
}

export default NewExpenses;