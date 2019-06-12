import React from "react";

function Form() {
  return (
    <form>
      <h2>Your Expenses Here</h2>

      <div className="field">
        <label>Expense Name</label>
        <input
          type="next"
          className="u-full-width"
          placeholder="Example Food"
        />
      </div>
      <div className="field">
        <label>Expense Amount</label>
        <input
          type="next"
          className="u-full-width"
          placeholder="Example Food"
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
