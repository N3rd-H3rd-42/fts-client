import React from "react";
import "../../css/navbar.css";

const NavBar = () => {
  
  return (
    <nav id="navbar" className="navbar navbar-container">
      <div className="nav-logo-container">
        <img className="nav-logo" src="images/fts-logo.jpeg" alt="office" />
      </div>

      <div className="nav-links-wrapper">
        <div className="top-nav-items-container">
          <a className="nav-link ride-anchor" href="/">
            RIDE WITH US
          </a>
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
    </nav>
  );
};

export default NavBar;
