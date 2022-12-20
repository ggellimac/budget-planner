import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0);

    const remaining = budget - totalExpenses

    let alertType = 'alert-success'
    if (totalExpenses > budget) {
        alertType = 'alert-danger' 
    } else if (remaining < 100) {
        alertType = 'alert-warning'
    }

    return (
        <div className={`alert ${alertType}`}> {/* <-- template literal */}
            <span>Remaining: ${remaining}</span>
        </div>
    );
};

export default Remaining;