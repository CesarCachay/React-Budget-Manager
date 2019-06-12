import React, { useState } from "react";

function Question() {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  const setBudget = e => {
    e.preventDefault();

    console.log(typeof quantity);
    // validation
    if (quantity < 1 || isNaN(quantity)) {
      setError(true);
      return;
    }
    //
  };

  return (
    <>
      <h2>Define your Budget</h2>

      {error ? (
        <p className="alert alert-danger error ">
          The budget is not defined, please enter a budget
        </p>
      ) : null}

      <form onSubmit={setBudget}>
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
