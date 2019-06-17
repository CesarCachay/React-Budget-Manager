import React from "react";
import { checkBudget } from "../helpers/helpers";

const ControlBudget = ({ budget, moneyLeft }) => {
  return (
    <>
      <div className="alert alert-primary">Budget: ${budget}</div>
      <div className={checkBudget(budget, moneyLeft)}>
        Remaining Money: ${moneyLeft}
      </div>
    </>
  );
};

export default ControlBudget;
