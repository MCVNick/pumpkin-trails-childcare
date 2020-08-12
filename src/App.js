import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import "./reset.scss";
import "./App.scss";

const App = () => {
  return (
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
};

export default App;
