import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onSaveExpenseHander, onSetEditing }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // const [input, setInput] = useState({
    //      title: '',
    //      amount: '',
    //      date: ''
    // })
    function titleChangeHandler(e) {
        setTitle(e.target.value);
        // setInput((prev) => {
        // return { ...prev, title: e.target.value }
        // })
    };
    function amountChangeHandler(e) {
        setAmount(e.target.value);
        // setInput((prev) => {
        // return { ...prev, amount: e.target.value }
        // })
    };
    function dateChangeHandler(e) {
        setDate(e.target.value);
        // setInput(prev => {
        // return { ...prev, date: e.target.value }
        // })
    }

    // Shared handler function
    function inputChangeHandler(input, val) {
        if (input === 'title') {
            setTitle(val);
        } else if (input === 'amount') {
            setAmount(val)
        } else {
            setDate(val);
        }
    }

    function cancelEditing(e) {
        onSetEditing(false)
    }

    function submitHandler(e) {
        e.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        }
        onSaveExpenseHander(expenseData);
        onSetEditing(false);
        setTitle('');
        setAmount('');
        setDate('');
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' value={title} onChange={e => inputChangeHandler('title', e.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='amount'>Amount</label>
                    <input type='number' id='amount' min='0.01' step='0.01' value={amount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='date'>Date</label>
                    <input type='date' id='date' min='2019-01-01' max='2022-12-31' value={date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={cancelEditing}>Cancel</button>
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;