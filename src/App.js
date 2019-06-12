import React from "react";
import Question from "./components/Question";

function App(props) {
  return (
    <div className="App container">
      <header>
        <h1>Weekly Expenses</h1>
        <div className="mainContent content">
          <Question />
        </div>
      </header>
    </div>
  );
}

export default App;
