import React from "react";

const HomeAboutSection = () => {
  return (
    <div className="home-about-section">
      <div className="home-about-heading-container">
        <h1 className="home-about-section-h1">OUR MISSION</h1>
      </div>
      <div className="home-heading-underline"></div>
      <p
        style={{
          width: "80%",
          textAlign: "center",
          textJustify: "center",
          fontSize: "larger",
        }}
      >
        We understand how important it is to arrive safe and on time to your
        appointments and that is our only priority. See why medical
        professionals continue to trust and use Future Trans Systems for
        non-emergency medical transportation. Unlike other transportation
        companies, we perform strictly medical transportation and remain ready
        for you whenever and wherever.
      </p>

      <button className="home-about-button" href="/about">
        ABOUT US
      </button>
    </div>
  );
};

export default HomeAboutSection;
