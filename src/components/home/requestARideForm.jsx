import React, { useState } from "react";

const RequestARideForm = () => {
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
    <div id="request-a-ride-section">
      <div className="request-a-ride-form-container">
        <h1>
          <i
            className="fa-solid fa-car fa-2x"
            style={{ paddingRight: "5px" }}
          ></i>{" "}
          REQUEST A RIDE
        </h1>

        <h3>
          Simply complete this form and we will be in touch with you to confirm
          your travel plans.
        </h3>
        <form id="ride-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="ride-form-left-inputs">
            <h3 className="ride-form-radio-h3">Who is requesting the ride?</h3>
            <div className="ride-form-radio-container">
              <div className="ride-form-radio-option-container">
                <label className="ride-form-label" htmlFor="">
                  Medical Facility
                </label>
                <input
                  type="radio"
                  name="requesterType"
                  value="facility"
                  onChange={onChange}
                />
              </div>

              <div className="ride-form-radio-option-container">
                <label className="ride-form-label" htmlFor="">
                  Case Manager
                </label>
                <input
                  type="radio"
                  name="requesterType"
                  value={"case-manager"}
                  onChange={onChange}
                />
              </div>

              <div className="ride-form-radio-option-container">
                <label className="ride-form-label" htmlFor="">
                  Patient
                </label>
                <input
                  type="radio"
                  name="requesterType"
                  value={"patient"}
                  onChange={onChange}
                />
              </div>
            </div>

            <input
              className="ride-form-input"
              name="name"
              type="text"
              placeholder="enter your name"
              onChange={onChange}
            />
            <input
              className="ride-form-input"
              name="phone"
              type="text"
              placeholder="enter your phone number"
              onChange={onChange}
            />
            <input
              className="ride-form-input"
              name="accchs"
              type="text"
              placeholder="persons ACCCHS ID"
              onChange={onChange}
            />
          </div>

          <div className="ride-form-right-inputs">
            <input
              className="ride-form-input"
              name="pickup"
              type="address"
              placeholder="enter pickup location"
              onChange={onChange}
            />
            <input
              className="ride-form-input"
              name="destination"
              type="address"
              placeholder="enter destination"
              onChange={onChange}
            />
            <input
              className="ride-form-input"
              name="date"
              type="date"
              onChange={onChange}
            />
            <input
              className="ride-form-input"
              name="time"
              type="time"
              onChange={onChange}
            />
          </div>

          <button
            className="ride-request-button"
            type="submit"
            onSubmit={(e) => handleSubmit(e)}
          >
            CONFIRM REQUEST
          </button>
        </form>
      </div>

      <div className="need-to-register">
        <h1>
          <i
            className="fa-solid fa-person fa-2x"
            style={{ paddingRight: "15px" }}
          >
            {" "}
          </i>
          Need to register?
        </h1>
        <h3>
          If you haven't used Future Trans Systems before but would like to,
          simply complete the ride request form and if you are a new client,
          we'll get you going swiftly. If you have questions or comments about
          our services, please contact us directly. Let us show you the better way to travel for your
          medical needs.
        </h3>
        <h3>Why use Future Trans Systems?</h3>
        <ul>
          <li>
            We've been in business for over 9 years and serve over 130 medical
            facilities.
          </li>
          <li>
            Your safety and care is our top priority and our drivers make you
            their priority.
          </li>
          <li>
            We're simply to use! Submit a ride request and you'll arriving no
            time!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RequestARideForm;
