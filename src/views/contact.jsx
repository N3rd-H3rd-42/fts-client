import React from "react";
import PageHeading from "../components/pages/pageHeading";
import "../css/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <PageHeading>CONTACT US</PageHeading>

      <div class="apply-details-container">
        <h3>Please complete the contact form below.</h3>
      </div>

      <div class="application-form-container">
        <form action="" class="application-form">
          <label class="application-form-label" for="name">
            Name
          </label>
          <input type="text" />
          <label class="application-form-label" for="name">
            Email
          </label>
          <input type="text" />
          <label class="application-form-label" for="name">
            Phone
          </label>
          <input type="text" />
          <label class="application-form-label" for="name">
            Message
          </label>
          <input type="text" />
        </form>
      </div>

      <div className="contact-content-container">
        <img
          className="fts-map-location"
          src="/images/fts-map-location.png"
          alt="fts-map-location"
        />

        <div className="location-info-container">
          <h3>
            Future Trans Systems LLC
            <br /> Phoenix, Arizona
            <br /> 101 N 55th St <br /> Phoenix, AZ 85034 <br /> Phone: (480)
            410-2359
          </h3>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
