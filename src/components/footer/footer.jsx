import React from "react";
import "./footer.css";

const Footer = () => {
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
        <a href="/register" className="footer-nav-item">
          REGISTER
        </a>
        <a href="/contact" className="footer-nav-item">
          CONTACT
        </a>
      </nav>

      <div className="footer-contact-form">
        <h2 style={{ color: "black" }}>
          <i
            className="fa-solid fa-envelope fa-2x"
            style={{ paddingRight: "10px", color: "black" }}
          ></i>{" "}
          CONTACT US{" "}
        </h2>
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="text" name="email" placeholder="Enter your email" />
        <input
          className="contact-message-box"
          type="text"
          name="message"
          placeholder="Enter a message"
        />
        <button className="footer-contact-form-button" type="submit">
          SEND
        </button>
      </div>
    </div>
  );
};

export default Footer;
