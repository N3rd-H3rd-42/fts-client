import React, { useState } from "react";
import "../../css/navbar.css";
import Modal from "../reusableComponents/modal/modal";

const NavBar = () => {
  const [display, setDisplay] = useState(false);

  const close = () => {
    setDisplay(false);
  };

  return (
    <nav id="navbar" className="navbar navbar-container">
      <div className="nav-logo-container">
        <img className="nav-logo" src="images/fts-logo.jpeg" alt="office" />
      </div>

      <div className="nav-links-wrapper">
        <div className="top-nav-items-container">
          <button
            className="nav-link ride-anchor"
            href="/"
            onClick={() => setDisplay(!display)}
          >
            RIDE WITH US
          </button>
          <a className="nav-link nav-home-anchor" href="/">
            HOME
          </a>
          <a href="/about">ABOUT</a>
        </div>

        <div className="botton-nav-items-container">
          <a className="nav-link" href="/apply">
            APPLY
          </a>
          <a className="nav-link" href="/login">
            LOGIN
          </a>
          <a className="nav-link contact-anchor" href="/contact">
            CONTACT
          </a>
        </div>
      </div>
      <a className="nav-phone-number" href="/">
        <i className="fa-solid fa-phone" style={{ padding: "5px" }}></i> (928)
        221-0141
      </a>
      <i className="fa-solid fa-bars mobile-nav-toggle" />
      <Modal display={display} close={close}>
        <div className="modalTitleContainer">
          <h2>Please complete the request form below.</h2>
        </div>
        <input type="text" placeholder="enter your name" />
        <input type="text" placeholder="enter your phone number" />
        <input type="text" placeholder="are you a case manager?" />
        <input type="text" placeholder="are you a patient?" />
        <input type="text" placeholder="enter your ACCCHS id" />
        <input type="date" />
        <input type="time" />
        <button className="modalSubmitBtn" type="submit">
          CONFIRM REQUEST
        </button>
      </Modal>
    </nav>
  );
};

export default NavBar;
