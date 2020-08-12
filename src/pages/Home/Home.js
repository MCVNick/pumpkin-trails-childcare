import React, { useState, useEffect } from "react";

import picOfFacility from "../../resources/placeholders/1500x600.png";
import Footer from "../../Components/Footer/Footer";
import "./Home.scss";

const Home = () => {
  const [navHeight, setNavHeight] = useState(
    document.getElementById("main-navbar").offsetHeight
  );
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      setSize(window.innerWidth);
      setNavHeight(document.getElementById("main-navbar").offsetHeight);
      window.removeEventListener("resize", updateWidth);
    };

    window.addEventListener("resize", updateWidth);
    console.log("fire");
  }, [size]);

  return (
    <main
      id="home-page"
      style={{ minHeight: `calc(100vh - ${navHeight}px - 100px)` }}
    >
      <div className="img-container">
        <img draggable={false} src={picOfFacility} alt="facility placeholder" />

        <div className="img-container-overlay">
          <h1>Business Underway</h1>
          <p>
            Pumpkin Trails Childcare is currently underway. Until enough funds
            are made to open up a facility, we only provide nanny care and
            babysitting that fits in with our teachers schedules. To get in
            contact please text Nick at (801) 558-7870
          </p>
          <p>
            The website is under construction and currently being updated from
            whenever possible. Certain pages may not be finished yet.
          </p>
          <a
            href="https://www.gofundme.com/pumpkin-trails-childcare"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help Fund
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
