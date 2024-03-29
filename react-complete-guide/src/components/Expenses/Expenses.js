import React, {useState} from 'react';

import Card from "./../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from './ExpensesList';
import "./Expenses.css";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expense.filter(ex => {
    return ex.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expense={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;