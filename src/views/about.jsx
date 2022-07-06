import React from "react";
import PageHeading from "../components/pages/pageHeading";
import "../css/about.css";

const About = () => {
  return (
    <div className="about-container">
      <PageHeading>ABOUT US</PageHeading>
      <div className="about-section-1">
        <h1>It's What We Do.</h1>
        <div className="heading-underline"></div>
        <p className="about-section-1-p">
          Many transportation companies state that they provide Non-Emergency
          Medical Transportation (NEMT) services. The truth is, many companies
          attempt to provide NEMT transportation and are often unprepared to
          provide the care and attention your medical transportation needs
          deserve. At Future Trans Systems, Non-Emergency Medical Transportation
          isn't just an option, it is ALL that we do. You can be assure that our
          drivers and staff are always ready to provide you the right
          transportation at the right time.
        </p>
      </div>

      <div className="about-content">
        <div className="about-section-2">
          <h1>Our Mission</h1>
          <div
            className="heading-underline"
            style={{ borderTop: "3px solid #ff0000", width: "170px" }}
          ></div>

          <div>
            <p className="about-mission-content">
              We provide Non-Emergency Medical Transportation (NEMT) across the
              valley and throughout the Navajo Nations and abroad to anyone
              qualified through insurance, at anytime. Every driver at Future
              Trans Systems is well vetted and 100% ADA compliant. Our mission
              is to provide premiere Non-Emergency Medical Transportation that
              is easy to book, safe to use and remains trusted through the
              valley and beyond the state of Arizona. You're care is our
              opportunity and your satisfaction is what keeps us going. We
              strive everyday to assure our clients arrive safely to and from
              their appointments.
            </p>

            <br />
          </div>
        </div>

        <div className="about-section-3">
          <div className="about-3-left-content">
            <h2 className="about-section-3-h2">We Take Pride In Our Care</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              officia doloremque, perspiciatis eligendi provident hic quaerat
              aspernatur rerum cumque qui porro, tempora harum ducimus error ad
              nisi eum aperiam, reprehenderit ad asperiores eos eligendi?
              Provident.
            </p>
          </div>
          <img
            src="./images/medical_professional_arms_crossed.jpg"
            alt="male nurse arms crossed"
            className="about-3-image"
          />
        </div>
      </div>

      {/* <div className="about-partners-section">
        <h1 className="about-partners-h1">OUR PARTNERS</h1>
        <div className="about-partners-logo-container">
          <img
            src=""
            alt="some partners of future trans systems"
            className="about-partners-img"
          />
          <img
            src=""
            alt="some partners of future trans systems"
            className="about-partners-img"
          />
          <img
            src=""
            alt="some partners of future trans systems"
            className="about-partners-img"
          />
          <img
            src=""
            alt="some partners of future trans systems"
            className="about-partners-img"
          />
          <img
            src=""
            alt="some partners of future trans systems"
            className="about-partners-img"
          />
        </div>
      </div> */}

      <div>
        {" "}
        <p className="about-ul-heading">
          <strong>Qualified Requests</strong>
        </p>
        <ul className="about-2-list">
          <div>
            <li className="about-list-li">Routine doctor visits</li>
            <li className="about-list-li">Dialysis appointments</li>
            <li className="about-list-li">Patient discharges</li>
            <li className="about-list-li">Physical therapy</li>
          </div>

          <div>
            <li className="about-list-li">Scheduled outpatient procedures</li>
            <li className="about-list-li">Workers’ compensation claims</li>
            <li className="about-list-li">
              Independent Medical Examiner (IME)
            </li>
            <li className="about-list-li">
              Prescription order pickups and refills
            </li>
          </div>
        </ul>
      </div>

      <div className="about-section-bottom-banner">
        <div className="about-section-bottom-banner-overlay">
          <div className="about-bottom-banner-text">
            <h1>FUTURE TRANS SYSTEMS IS HERE FOR YOU.</h1>
            <div
              className="heading-underline"
              style={{ width: "200px", borderTop: "2px solid white" }}
            ></div>
            <h2 style={{ color: "white" }}>
              LET US PROVIDE THE TRANPORTATION SERVICES YOU NEED.
            </h2>
          </div>
          <button className="about-request-a-ride-btn">
            REQUEST A RIDE{" "}
            <i
              className="fa-solid fa-arrow-right fa-1x"
              style={{ marginLeft: "5px" }}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
