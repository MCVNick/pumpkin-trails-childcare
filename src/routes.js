import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Fallback from "./pages/Fallback/Fallback";
const Home = lazy(() => import("./pages/Home/Home"));
// const About = lazy(() => import("./pages/About/About"));
// const Contact = lazy(() => import("./pages/Contact/Contact"));

export default (
  <div id="routes-nav-header-footer">
    {/* <Navbar />
    <Footer /> */}
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={300} classNames="fade">
            <Suspense fallback={Fallback}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/Home" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Contact" component={Contact} /> */}
                {/* TODO: make 404 page */}
                <Route component={Home} />
              </Switch>
            </Suspense>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  </div>
);
