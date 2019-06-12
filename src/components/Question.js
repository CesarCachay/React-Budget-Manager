import React from "react";

function Question() {
  // handleSubmit(event) {
  //   console.log(event)
  // }

  return (
    <>
      <h2>Define your Budget</h2>
      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Add your budget"
          //  onChange={handleSubmit}
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
