import React from "react";
import { withRouter, Link } from "react-router-dom";

import cover from "./../../resources/branding/cover.jpg";
import pumpkin from "./../../resources/branding/pumpkin.png";
import "./Navbar.scss";

const Navbar = (props) => {
  const { push, location } = props.history;
  const { pathname } = location;

  return (
    <nav id="main-navbar">
      <div className="user-navbar-choices">
        <ul>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
      <div className="img-container">
        <img draggable={false} src={cover} alt="Children holding hands with logo off to left." />
      </div>
      <div className="navbar-choices">
        <img draggable={false} src={pumpkin} alt="pumpkin logo" onClick={() => push("/")} />
        <ul>
          <li className={pathname === "/" ? "selected" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={pathname === "/contact" ? "selected" : ""}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
