import React from "react";

const HomeHero = () => {
  return (
    <div id="home-hero">
      <div className="hero-content">
        <div className="image-overlay"></div>
        <div className="hero-heading-container">
          <h1 className="hero-heading">Better Medical Transportation</h1>
          <h2 className="hero-sub-heading">
            Fts is a thing that does this thing and another thing.
          </h2>
        </div>
        <button className="hero-cta-button">REQUEST A RIDE</button>
      </div>
    </div>
  );
};

export default HomeHero;
