import React from "react";

const HomeAboutSection = () => {
  return (
    <div className="home-about-section">
      <div className="home-about-heading-container">
        <h1>OUR MISSION</h1>
      </div>
      <p>Delivering Superior Medical Transportation Services To Our Patients</p>

      <button className="home-about-button" href="/about">
        ABOUT US
      </button>
    </div>
  );
};

export default HomeAboutSection;
