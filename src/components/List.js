import React from "react";

import Expense from "./Expense";

function List({ expenses }) {
  return (
    <div className="performed-expenses">
      <h2>List of Expenses</h2>
      {expenses.map(expense => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
}

export default List;
