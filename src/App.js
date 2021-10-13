import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

import dummyExpenses from "./components/DummyValues.js";

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  function addExpense(newExpense) {
    const newExpenseId = 'e' + expenses.length;
    newExpense = {id: newExpenseId, ...newExpense};
    console.log(newExpense);
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense];
    });
    console.log(expenses);
  }

  return (
    <div className="App">
      <NewExpense addExpense={addExpense}/>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;