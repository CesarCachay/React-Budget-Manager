import React, { useState } from "react";

import Error from "./Error";

function Form() {
  const [nameExpense, setNameExpense] = useState("");
  const [qtyExpense, setQtyExpense] = useState(0);
  const [error, setError] = useState(false);

  // When you create an expense
  const createExpense = e => {
    e.preventDefault();

    // Validation
    if (qtyExpense < 1 || isNaN(qtyExpense) || nameExpense === "") {
      setError(true);
      return;
    }
  };

  return (
    <form onSubmit={createExpense}>
      <h2>Your Expenses Here</h2>

      {error ? <Error message="Both fields are required" /> : null}

      <div className="field">
        <label>Expense Name</label>
        <input
          type="next"
          className="u-full-width"
          placeholder="Ej. Food"
          onChange={e => setNameExpense(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Expense Amount</label>
        <input
          type="next"
          className="u-full-width"
          placeholder="Ej. 50"
          onChange={e => setQtyExpense(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add Expense"
      />
    </form>
  );
}

export default Form;
