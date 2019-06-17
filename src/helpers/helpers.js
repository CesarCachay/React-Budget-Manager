export const checkBudget = (budget, moneyLeft) => {
  let colour;
  //  Check if it's negative
  if (budget / budget > moneyLeft) {
    colour = "alert alert-none";
  }
  // Check the 25%
  else if (budget / 4 > moneyLeft) {
    colour = "alert alert-danger";
  }
  // Check the half of the budget
  else if (budget / 2 > moneyLeft) {
    colour = "alert alert-warning";
  }
  // Check if it's more than 50%
  else {
    colour = "alert alert alert-success";
  }
  return colour;
};
