import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Pumpkin Trails Childcare</p>
        <p>Montessori Childcare Underway</p>
        <p>Website Under Construction</p>
        <a
          className="App-link"
          href="https://www.gofundme.com/pumpkin-trails-childcare"
          target="_blank"
          rel="noopener noreferrer"
        >
          Help Fund
        </a>
      </header>
    </div>
  );
}

export default App;
