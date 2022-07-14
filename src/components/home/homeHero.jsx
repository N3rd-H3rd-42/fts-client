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
            We make it easy to request a ride to or from your medical
            appointments. Simply click the request a ride button, complete ride
            request form and we will connect you with one of our drivers to make
            sure you arrive safely and on time to your medical appointments,
            prescription refills or other qualified transportation requests.
            Click the request a ride button below to get started!
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
