import React, { useState } from "react";
import "../../css/navbar.css";
import Modal from "../reusableComponents/modal/modal";

const NavBar = () => {
  const [values, setValues] = useState({
    requesterType: "",
    name: "",
    phone: "",
    accchs: "",
    pickup: "",
    destination: "",
    date: "",
    time: "",
  });

  const [display, setDisplay] = useState(false);

  const close = () => {
    setDisplay(false);
  };

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

        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className="ride-modal-radio-h3">Who is requesting the ride?</h3>
          <div className="ride-modal-radio-container">
            <div class="ride-modal-radio-option-container">
              <label htmlFor="">Medical Facility</label>
              <input
                type="radio"
                name="requesterType"
                value="facility"
                onChange={onChange}
              />
            </div>
            <div class="ride-modal-radio-option-container">
              <label htmlFor="">Case Manager</label>
              <input
                type="radio"
                name="requesterType"
                value={values.requesterType}
                onChange={onChange}
              />
            </div>
            <div class="ride-modal-radio-option-container">
              <label htmlFor="">Patient</label>
              <input
                type="radio"
                name="requesterType"
                value={values.requesterType}
                onChange={onChange}
              />
            </div>
          </div>
          <input
            name="name"
            type="text"
            placeholder="enter your name"
            onChange={onChange}
          />
          <input
            name="phone"
            type="text"
            placeholder="enter your phone number"
            onChange={onChange}
          />
          <input
            name="accchs"
            type="text"
            placeholder="persons ACCCHS ID"
            onChange={onChange}
          />
          <input
            name="pickup"
            type="address"
            placeholder="enter pickup location"
            onChange={onChange}
          />
          <input
            name="destination"
            type="address"
            placeholder="enter destination"
            onChange={onChange}
          />
          <input name="date" type="date" onChange={onChange} />
          <input name="time" type="time" onChange={onChange} />
          <button
            className="modalSubmitBtn"
            type="submit"
            onSubmit={(e) => console.log("clocked")}
          >
            CONFIRM REQUEST
          </button>
        </form>
      </Modal>
    </nav>
  );
};

export default NavBar;
