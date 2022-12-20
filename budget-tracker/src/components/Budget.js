import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const [budget, setBudget] = useState('2000');

    const handleChange = (event) => {
        
        setBudget(event);

        dispatch({
            type: 'SET_BUDGET',
            payload: event,
        });
    };

    return (
        <div className="row alert alert-secondary">
            <div className="col-med">
                <span>Budget: $</span>
                <input
                    required="required"
                    type="number"
                    className="form-control"
                    id="name"
                    value={budget}
                    onChange={(event) => handleChange(event.target.value)}></input>
            </div>
        </div>
    );
};

export default Budget;