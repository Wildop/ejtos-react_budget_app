import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, expenses, currency } = useContext(AppContext);
    const [budget, setBudget] = useState('');
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    const changeBudget = (newBudget) => {
        if (newBudget>20000){
            alert("The value cannot exceed remaining funds  £20,000");

        } else if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
        } else {
            setBudget(newBudget)

            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }
    }
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget} //2000
                        step='10'
                        onChange={(event) => changeBudget(event.target.value)}>
                        </input>
            </span>
        </div>
    );
};
export default Budget;