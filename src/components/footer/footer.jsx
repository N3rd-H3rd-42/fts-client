import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './footer.css';

const Footer = () => {
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

    setSubmitted(true);
  };

  const [submitted, setSubmitted] = useState(false);

  return (
    <div id="footer">
      <div className="footer-fts-location">
        <h3>Future Trans Systems</h3>
        <h3>Phoenix, Arizona</h3>
        <h3>101 N 55th St</h3>
        <h3>Phoenix, AZ 85034</h3>
      </div>

      <nav className="footer-nav">
        <a href="/home" className="footer-nav-item">
          HOME
        </a>
        <a href="/about" className="footer-nav-item">
          ABOUT
        </a>
        <a href="/apply" className="footer-nav-item">
          APPLY
        </a>
        {/* <a href="/register" className="footer-nav-item">
          REGISTER
        </a> */}
        <a href="/login" className="footer-nav-item">
          LOGIN
        </a>
        <a href="/contact" className="footer-nav-item">
          CONTACT
        </a>
      </nav>

      <div className="footer-contact-form">
        <h2 style={{ color: 'black' }}>
          <i
            className="fa-solid fa-envelope fa-2x"
            style={{ paddingRight: '10px', color: 'black' }}
          ></i>
          CONTACT US
        </h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="from_name" placeholder="Enter your name" />
          <input
            type="email"
            name="sender_email"
            placeholder="Enter your email"
          />
          <input
            type="phone"
            name="from_phone"
            placeholder="enter your phone number"
          />
          <input
            className="contact-message-box"
            type="text"
            name="message"
            placeholder="Enter a message"
          />
          <button
            className="footer-contact-form-button"
            type="submit"
          >
            SEND
          </button>
        </form>
        <p>
          {submitted ? 'Thank you, your request has been sent.' : null}
        </p>
      </div>
    </div>
  );
};

export default Footer;
