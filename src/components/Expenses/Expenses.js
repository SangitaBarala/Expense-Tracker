import React, {useState} from "react";
import ExpenseList from "./ExpenseList";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.items.filter(expense=>{
        return expense.date.getFullYear().toString() === filteredYear
    })

    return(
        <Card className="expenses">
            <ExpenseFilter filterYearProp={filteredYear} onFilterChange={filterChangeHandler}/>
            <ExpenseList items={filteredExpenses}/>
        </Card>
    )
}
export default Expenses