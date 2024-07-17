import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter";
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
    const filterVals = items.filter(e => e.date.getFullYear() === Number(filter));
    // const displayItems = [];
    // items.forEach(e => {
    // displayItems.push(<ExpenseItem exp={e} />)
    // });
    // console.log(items);

    let filterContents = <p>No expense found</p>;
    if (filterVals.length > 0)
        filterContents = filterVals.map(e => <ExpenseItem exp={e} key={e.id} />)

    return (
        <div>
            <ExpenseFilter filter={filter} onFilterChange={filterChange} />
            <Card className='expenses'>
                {filterContents}
            </Card>
        </div>
    );
}

export default Expenses;