import React from "react";

const ControlBudget = ({ budget, moneyLeft }) => {
  return (
    <>
      <div className="alert alert-primary">Budget: ${budget}</div>
      <div className="">Remaining Money: ${moneyLeft}</div>
    </>
  );
};

export default ControlBudget;
