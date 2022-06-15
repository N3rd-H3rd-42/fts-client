import React from "react";
import PageHeading from "../components/pages/pageHeading";
import "../css/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <PageHeading>CONTACT US</PageHeading>
      <div className="contact-page-banner">
        <h1 className="contact-banner-h1">GET IN TOUCH WITH US</h1>
        <div className="heading-underline"></div>
        <p className="contact-page-banner-text">
          Let us connect you to the people who can help you best. Please fill
          out the contact form below and one of our team members will contact
          you shortly.
        </p>
        {/* <p>WE'D LOVE TO HEAR FROM YOU</p> */}
      </div>

      <form action="post" className="contact-form">

        <div className="contact-form-left-container">
          <label className="contact-form-label" for="name">
            Your Name (required)
          </label>
          <input className="contact-form-input" type="text" />
          <label className="contact-form-label" for="name">
            Your Email (required)
          </label>
          <input className="contact-form-input" type="text" />
          <label className="contact-form-label" for="name">
            Phone Number (required)
          </label>
          <input className="contact-form-input" type="text" />
        </div>

        <div className="contact-form-right-container">
          <label className="contact-form-label" for="name">
            Your Message
          </label>
          <input className="contact-form-text-input" type="textbox" />
          <button className="contact-form-submit-button" type="submit">
            SEND
          </button>
        </div>
      </form>

      <div className="contact-content-container">
        <img
          className="fts-map-location"
          src="/images/fts-map-location.png"
          alt="fts-map-location"
        />
        <div className="location-info-container">
          <h3 className="location-info-h3">Future Trans Systems LLC</h3>
          <h3 className="location-info-h3">Phoenix, Arizona</h3>
          <h3 className="location-info-h3">101 N 55th St </h3>
          <h3 className="location-info-h3">Phoenix, AZ 85034 </h3>
          <h3 className="location-info-h3">Phone: (480) 410-2359</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
