import ExpenseItem from './ExpenseItem';
import Card from './Card'
import './Expenses.css';

function Expenses({ items }) {
    return (
        <Card className='expenses'>
            <ExpenseItem exp={items[0]} />
            <ExpenseItem exp={items[1]} />
            <ExpenseItem exp={items[2]} />
            <ExpenseItem exp={items[3]} />
        </Card>
    );
}

export default Expenses;