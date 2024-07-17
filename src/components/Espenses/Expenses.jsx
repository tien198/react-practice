import { useState } from 'react';
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from './ExpenseList';
import './Expenses.css';

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


    return (
        <div>
            <ExpenseFilter filter={filter} onFilterChange={filterChange} />
            <Card className='expenses'>
                <ExpenseList items={items} filterProp={filter} />
            </Card>
        </div>
    );
}

export default Expenses;