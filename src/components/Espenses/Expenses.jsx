import { useState } from 'react';
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from './ExpenseList';
import './Expenses.css';
import ExpenseCharBar from './ExpenseCharBar';

const par = {
    items: [{
        title: '', amount: '', date: new Date()
    }]
}
/**
 * @param {par}  - description
 */
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
    const filterVals = items.filter(e => e.date.getFullYear() === Number(filter));

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter filter={filter} onFilterChange={filterChange} />
                <ExpenseCharBar expenses={filterVals} />
                <ExpenseList filterVals={filterVals} />
            </Card>
        </div>
    );
}

export default Expenses;