import React, { useState } from "react";

import Error from "./Error";

function Question(props) {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  const { setBudget, setAskBudget, setMoneyLeft } = props;

  const saveBudget = e => {
    e.preventDefault();

    // Validation
    if (quantity < 1 || isNaN(quantity)) {
      setError(true);
      return;
    }
    // After validate
    setError(false);
    setBudget(quantity);
    setMoneyLeft(quantity);
    setAskBudget(false);
  };

  return (
    <>
      <h2>Define your Budget</h2>

      {error ? <Error message="The expense is not defined" /> : null}

      <form onSubmit={saveBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Add your budget"
          onChange={e => setQuantity(parseInt(e.target.value, 10))} //The 10 is because we define base 10 integers
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Submit budget"
        />
      </form>
    </>
  );
}

export default Question;
