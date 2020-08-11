import React from "react";
import { withRouter, Link } from "react-router-dom";

import cover from "./../../resources/branding/cover.jpg";
import pumpkin from "./../../resources/branding/pumpkin.png";
import "./Navbar.scss";

const Navbar = (props) => {
  return (
    <nav id="main-navbar">
      <div className="img-container">
        <img src={cover} alt="Children holding hands with logo off to left." />
      </div>
      <div className="navbar-choices">
        <img
          src={pumpkin}
          alt="pumpkin logo"
          onClick={() => console.log(props.history.push("/"))}
        />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
