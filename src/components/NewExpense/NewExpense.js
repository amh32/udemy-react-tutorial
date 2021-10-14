import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    function saveExpenseHandler(enteredExpense) {
        props.addExpense(enteredExpense);
        minimize();
    };

    const [minimized, setMinimized] = useState(true);
    const minimize = () => setMinimized(!minimized);

    return <div className='new-expense'>
        {
            minimized ? <div>
                <button onClick={minimize}>Add New Expense</button>
            </div> : <div>
                <ExpenseForm onSaveExpense={saveExpenseHandler} minimize={minimize} />
            </div>
        }
    </div>
};

export default NewExpense;