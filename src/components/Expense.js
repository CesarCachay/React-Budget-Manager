import React from "react";

const Expense = ({ expense }) => (
  <li className="expenses">
    <p>
      {expense.nameExpense}
      <span className="gasto">$ {expense.qtyExpense}</span>
    </p>
  </li>
);

export default Expense;
