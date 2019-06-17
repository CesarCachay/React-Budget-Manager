import React, { useState, useEffect } from "react";

import Form from "./components/Form";
import Question from "./components/Question";
import List from "./components/List";
import ControlBudget from "./components/ControlBudget";

function App() {
  const [budget, setBudget] = useState(0);
  const [moneyLeft, setMoneyLeft] = useState(0);
  const [askBudget, setAskBudget] = useState(true);
  const [createExpense, setCreateExpense] = useState(false);
  const [expense, setExpense] = useState({});
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if (createExpense) {
      const listExpenses = [...expenses, expense];
      setExpenses(listExpenses);

      // Once it creates an expense, change it to false again
      setCreateExpense(false);
    }
  }, [createExpense]);

  return (
    <div className="App container">
      <header>
        <h1>Weekly Expenses</h1>
        <div className="mainContent content">
          {askBudget ? (
            <Question
              setBudget={setBudget}
              setAskBudget={setAskBudget}
              setMoneyLeft={setMoneyLeft}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                  setMoneyLeft={setMoneyLeft}
                />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <ControlBudget budget={budget} moneyLeft={moneyLeft} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
