import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>
  }

  return (
  <ul className="expenses-list">
    {props.items.map((ex) => (
      <ExpenseItem
        key={ex.id}
        title={ex.title}
        amount={ex.amount}
        date={ex.date}
      />
    ))};
  </ul>
  );
};

export default ExpensesList;