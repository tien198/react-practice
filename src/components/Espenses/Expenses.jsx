import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css';

function Expenses({ items }) {
    const [filter, setFilter] = useState('2020');
    function filterChange(filterVal) {
        setFilter(filterVal);
    }

    // const displayItems = [];
    // items.forEach(e => {
    // displayItems.push(<ExpenseItem exp={e} />)
    // });
    // console.log(items);

    return (
        <div>
            <ExpenseFilter filter={filter} onFilterChange={filterChange} />
            <Card className='expenses'>
                {items.map(e => <ExpenseItem exp={e} />)}
                {/* <ExpenseItem exp={items[0]} /> */}
                {/* <ExpenseItem exp={items[1]} /> */}
                {/* <ExpenseItem exp={items[2]} /> */}
                {/* <ExpenseItem exp={items[3]} /> */}
            </Card>
        </div>
    );
}

export default Expenses;