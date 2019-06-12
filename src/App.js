import React, { useState } from "react";

import Form from "./components/Form";
import Question from "./components/Question";

function App() {
  const [budget, setBudget] = useState(0);
  const [askBudget, setAskBudget] = useState(true);

  return (
    <div className="App container">
      <header>
        <h1>Weekly Expenses</h1>
        <div className="mainContent content">
          {askBudget ? (
            <Question setBudget={setBudget} setAskBudget={setAskBudget} />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form />
              </div>
              <div className="one-half column">Budget here</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
