import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [continueComp, setContinueComp] = useState(null);
  const construction = (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onClick={() => setContinueComp(finished)}
        />
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
  const finished = <div className="App"></div>;

  return continueComp ? continueComp : construction;
};

export default App;
