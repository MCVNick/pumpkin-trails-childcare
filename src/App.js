import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.svg";
import routes from "./routes";
import "./reset.scss";
import "./App.scss";

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
  const finished = (
    <div className="App">
      <p className="not-supported">
        This device is not supported. A screen width of at least 220 pixels is
        required. If you somehow have a device that is this small, contact me
        and I will attempt to make my site support the thing. Contact me at
        (801) 558-7870
      </p>
      <Router>{routes}</Router>
    </div>
  );

  return continueComp ? continueComp : construction;
};

export default App;
