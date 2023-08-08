import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const Currency = () => {
    const { dispatch, currency  } = useContext(AppContext);

    const changeCurrency = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    }
    

    return(
        <div>
            <select className="custom-select" id="inputGroupSelect01" 
                onChange={(event) => changeCurrency(event.target.value)} 
                value={currency}
                style={{backgroundColor: "#90EE90"}}>
                    <option defaultValue disabled>Choose...</option>
                <option value="$" name="dollar"> $ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
}
export default Currency;