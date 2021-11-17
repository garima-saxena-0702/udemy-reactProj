import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    let [expenseButtonFlag, setExpenseButtonFlag] = useState(true);

    const addExpenseExpandHandler = (prevFlag) => {
        setExpenseButtonFlag(!prevFlag);
    };

    if(expenseButtonFlag) {
        return <div className="new-expense">
            <button onClick={addExpenseExpandHandler}>Add new Expense</button>
        </div>
    }
    
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelChange={addExpenseExpandHandler}
        />
      </div>
    );
};

export default NewExpense;