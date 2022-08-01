import React from 'react';
import PageHeading from '../components/pages/pageHeading';
import emailjs from 'emailjs-com';
import '../css/contact.css';

const Contact = () => {
  const {
    REACT_APP_EMAIL_SERVICE_ID,
    REACT_APP_EMAIL_USER_ID,
    REACT_APP_EMAIL_FOOTER_TEMPLATE,
  } = process.env;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        REACT_APP_EMAIL_SERVICE_ID,
        REACT_APP_EMAIL_FOOTER_TEMPLATE,
        e.target,
        REACT_APP_EMAIL_USER_ID
      )
      .then((response) => {
        if (response) window.location.reload();
      })
      .catch((error) => {
        console.log('!!!dev error!!!', error.text);
      });
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
            name="from_name"
            type="text"
            placeholder="enter your name"
          />
          <label className="contact-form-label">Your Email (required)</label>
          <input
            className="contact-form-input"
            name="sender_email"
            type="email"
            placeholder="enter your email"
          />
          <label className="contact-form-label" htmlFor="name">
            Phone Number (required)
          </label>
          <input
            className="contact-form-input"
            name="from_phone"
            type="phone"
            placeholder="enter your phone number"
          />
        </div>

        <div className="contact-form-right-container">
          <label className="contact-form-label" htmlFor="name">
            Your Message
          </label>
          <textarea
            rows="5"
            cols="30"
            maxLength="250"
            className="contact-form-text-input"
            name="message"
            type="text"
            placeholder="enter a message"
          />
          <button
            className="contact-form-submit-button"
            type="submit"
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
          <h3 className="location-info-h3">monica@fts-nemt.com</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
