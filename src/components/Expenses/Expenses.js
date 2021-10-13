import React, { useState } from "react";
import "./Expenses.css";
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const expenses = props.expenses;
    const [selectedYear, setSelectedYear] = useState('All');

    // const [filteredExpenses, setFilteredExpenses] = useState(expenses);
    // const filterHandler = (year) => {
    //     setSelectedYear(year);
    //     year == 'All' ? setFilteredExpenses(expenses) : 
    //     setFilteredExpenses(expenses.filter(expense => 
    //         year == expense.date.getFullYear().toString()));
    // };


    const filterHandler = (year) => {
        setSelectedYear(year);
    };
    const filteredExpenses = (
        selectedYear === 'All' ? expenses : expenses.filter(expense =>
            selectedYear === expense.date.getFullYear().toString())
    );

    return <Card className="expenses">
        <ExpensesFilter onSelect={filterHandler}
            selected={selectedYear} />
        <ExpensesList expenses={filteredExpenses}></ExpensesList>
    </Card>
}

export default Expenses;