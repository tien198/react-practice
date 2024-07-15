import React from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' />
                </div>
                <div className='new-expense__controls'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' />
                </div>
                <div className='new-expense__controls'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' />
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;