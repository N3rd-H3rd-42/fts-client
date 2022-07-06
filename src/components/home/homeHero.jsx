import React from "react";

const HomeHero = () => {
  return (
    <div id="home-hero">
      <div className="hero-content">
        <div className="image-overlay"></div>
        <div className="hero-heading-container">
          <h1 className="hero-heading">
            The Better Choice for Non-Emergency Medical Transportation in The
            Valley.
          </h1>
          <h2 className="hero-sub-heading">
            Future Trans Systems has been trusted by over 138 medical
            professionals and facilities across Arizona.
          </h2>
          <a className="hero-cta-button" href="#request-a-ride-section">
            REQUEST A RIDE
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
