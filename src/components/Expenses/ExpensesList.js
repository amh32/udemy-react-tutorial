import React from "react";
import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    const expenses = props.expenses;

    let expenseList = <p className="expenses-list__fallback">No expenses found</p>;
    if(expenses.length > 0) {
        expenseList = expenses.map(expense =>
            <ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
            ></ExpenseItem>
        )
    }
    return <div className="expenses-list">{expenseList}</div>
}

export default ExpensesList;