import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    
    function saveExpenseHandler(enteredExpense) {
        props.addExpense(enteredExpense);
    };
    
    return <div className='new-expense'>
        <ExpenseForm onSaveExpense={saveExpenseHandler}/>
    </div>
};

export default NewExpense;