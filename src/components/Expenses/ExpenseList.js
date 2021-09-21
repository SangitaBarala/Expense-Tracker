import React from "react";
import './ExpenseList.css'
import ExpenseItems from "./ExpenseItems";

const ExpenseList = (props) => {
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">No expenses found</h2>
    }
    return(
        <ul className="expenses-list">
            {props.items.map((expense)=>(
                <ExpenseItems
                    key={expense.id}
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            ))}
        </ul>
    )
}
export default ExpenseList