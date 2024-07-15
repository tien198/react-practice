import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [title, setTitle] = useState('');
    function titleChangeHandler(event) {
        setTitle(event.target.value);
    };
    function amountChangeHandler(params) {

    };
    function dateChangeHandler() { }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label htmlFor='amount'>Amount</label>
                    <input type='number' id='amount' min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label htmlFor='date'>Date</label>
                    <input type='date' id='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;