import React, { useState } from "react";
// import { requestRideAction } from "../../Redux/actions/requestRideActions";
import { sanitize } from "../../utils/sanitize";

const RequestARideForm = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhoneNumber: "",
  });

  const [msg, setMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    let res = await sanitize(formData);
    console.log(res);
    if (res) {
      // dispatch(reguestRideAction(formData));
      setMsg({
        text: "Thank you for registering, please login.",
        type: "success",
      });
    }
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
        <form id="ride-form">
          <input
            type="text"
            name="clientName"
            placeholder="enter your full name"
            value={formData.clientName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="clientEmail"
            placeholder="enter your email address"
            value={formData.clientEmail}
            onChange={handleChange}
          />
          <input
            className="ride-message-box"
            type="text"
            name="clientPhoneNumber"
            placeholder="enter your phone number"
            value={formData.clientPhoneNumber}
            onChange={handleChange}
          />
          <button
            className="request-a-ride-button"
            type="submit"
            onClick={(e) => handleSubmit(e, formData)}
          >
            Send Request
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
        <h3>Call 000-000-0000 or email us at clientregistry@fts.com</h3>
        <h4>
          This is just some extra content, maybe what they need to register
        </h4>
        <h3>What you need</h3>
        <ul>
          <li>government issued id</li>
          <li>insurance card</li>
          <li>insurance card</li>
        </ul>
      </div>
    </div>
  );
};

export default RequestARideForm;
