import React, { useState } from "react";
import PageHeading from "../components/pages/pageHeading";
import "../css/contact.css";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values, "values");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = values;
    // call api and ship values
    console.log(data, "data");
  };

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

      <form
        action="post"
        className="contact-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="contact-form-left-container">
          <label className="contact-form-label" htmlFor="name">
            Your Name (required)
          </label>
          <input
            className="contact-form-input"
            name="name"
            type="text"
            placeholder="enter your name"
            onChange={onChange}
          />
          <label className="contact-form-label">Your Email (required)</label>
          <input
            className="contact-form-input"
            name="email"
            type="email"
            placeholder="enter your email"
            onChange={onChange}
          />
          <label className="contact-form-label" htmlFor="name">
            Phone Number (required)
          </label>
          <input
            className="contact-form-input"
            name="phone"
            type="phone"
            placeholder="enter your phone number"
            onChange={onChange}
          />
        </div>

        <div className="contact-form-right-container">
          <label className="contact-form-label" htmlFor="name">
            Your Message
          </label>
          <textarea
            rows="5"
            cols="30"
            maxlength="250"
            className="contact-form-text-input"
            name="message"
            type="text"
            placeholder="enter a message"
            onChange={onChange}
          />
          <button
            className="contact-form-submit-button"
            type="submit"
            onSubmit={(e) => handleSubmit(e)}
          >
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
