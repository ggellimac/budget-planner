import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses, search } = useContext(AppContext);

    const searchResults = expenses.filter(expense => expense.name.includes(search));

    return (<>
        <ul className="list-group">
            {search ? 
            searchResults.map((expense) => (
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
            )) : 
            expenses.map((expense) => (
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul> 
    </>);
};

export default ExpenseList