import React, { useState } from "react";
import Modal from "../reusableComponents/modal/modal";
import "./newNavBar.css";

const NewNavBar = () => {
  const [clicked, setClicked] = useState(false);
  const items = [
    {
      title: "home",
      url: "/",
      cName: "nav-item",
    },
    {
      title: "about",
      url: "/about",
      cName: "nav-item",
    },
    {
      title: "contact",
      url: "/contact",
      cName: "nav-item",
    },
    {
      title: "apply",
      url: "/apply",
      cName: "nav-item",
    },
    {
      title: "login",
      url: "/login",
      cName: "nav-item",
    },
  ];

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

  const renderNavItems = () => {
    return items.map((item, index) => {
      return (
        <li key={index}>
          <a href={item.url} className={item.cName}>
            {item.title.toUpperCase()}
          </a>
        </li>
      );
    });
  };

  const onHandleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="nav-menu">
      <img src="./images/fts-logo.jpeg" className="nav-logo" alt="fts-logo" />

      <div className="menu-icon" onClick={onHandleClick}>
        <i className={clicked ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}></i>
      </div>

      <ul className={clicked ? "nav-list active" : "nav-list"}>
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
                  value={"case-manager"}
                  onChange={onChange}
                />
              </div>
              <div class="ride-modal-radio-option-container">
                <label htmlFor="">Patient</label>
                <input
                  type="radio"
                  name="requesterType"
                  value={"patient"}
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
              onSubmit={(e) => handleSubmit(e)}
            >
              CONFIRM REQUEST
            </button>
          </form>
        </Modal>
          <button
            className="nav-link ride-req-btn"
            href="/"
            onClick={() => setDisplay(!display)}
          >
            REQUEST A RIDE
          </button>
        {renderNavItems()}
      </ul>
    </nav>
  );
};

export default NewNavBar;
