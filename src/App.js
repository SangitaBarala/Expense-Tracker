import React, {useState} from "react";
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const Dummy_Expenses = [
    {
        id:1,
        title:'Car Insurance',
        date:new Date(2021,5,4),
        amount:400
    },
    {
        id:2,
        title:'Groceries',
        date:new Date(2021,5,8),
        amount:500
    },
];
function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses)
  const addExpenseData = (expense) => {
      setExpenses((prevExpense => {
          return([expense, ...prevExpense])
      }))
  }
  return (
      <div>
        <h2 className="App">Expense Tracker !</h2>
          <NewExpense onAddExpenseData={addExpenseData}/>
        <Expenses items = {expenses}/>
      </div>
  )
}
export default App;