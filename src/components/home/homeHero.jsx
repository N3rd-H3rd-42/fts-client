import React from "react";
import HamburgerMenu from "../navBar/hamburgerMenu/hamburgerMenu";

const HomeHero = () => {
  return (
    <div id="home-hero">
      <div className="hero-content">
        <div className="image-overlay">
          <HamburgerMenu />
        </div>
        <div className="hero-heading-container">
          <h1 className="hero-heading">Better Medical Transportation</h1>
          <h2 className="hero-sub-heading">
            Fts is a thing that does this thing and another thing.
          </h2>
        </div>
        <a className="hero-cta-button" href="#request-a-ride-section">
          REQUEST A RIDE
        </a>
      </div>
    </div>
  );
};

export default HomeHero;
