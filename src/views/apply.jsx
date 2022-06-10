import React from "react";
import PageHeading from "../components/pages/pageHeading";
import "../css/apply.css";

const Apply = () => {
  return (
    <div className="apply-container">
     <PageHeading>APPLY</PageHeading>

      <div className="apply-title">
        <h3>Why Drive with FTS?</h3>
        <p className="apply-summary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iusto
          ipsum earum numquam odio totam. Sunt, accusantium delectus facere
          fugiat natus ex odio aperiam earum animi tempora beatae nulla maxime?
          Cum non, nisi voluptatem molestias dolor vero distinctio nam.
          Doloribus perspiciatis dolor sequi dolore minus quisquam quaerat nisi,
          quae quos repellendus alias hic sunt saepe ea aliquam nulla dolores
          deserunt!
        </p>
        <h3>Requirements</h3>
        <p className="apply-requirements">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga
          quisquam voluptates provident accusantium. Necessitatibus quaerat
          nulla obcaecati adipisci, dignissimos ducimus voluptatem praesentium
          unde dolorum quibusdam commodi harum cum neque.
        </p>
      </div>

      <div className="apply-details-container">
        <h3>How to apply</h3>
        <p className="how-to-apply-section">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, earum
          cupiditate impedit rem consequatur quos! Perspiciatis similique alias
          odit vitae omnis neque repellendus quis ratione nobis, accusamus,
          doloremque sed. Est.
        </p>

        <ul className="how-to-apply-list">
          <li className="how-to-apply-item">Complete the form below</li>
          <li className="how-to-apply-item">Must upload all official documents</li>
          <li className="how-to-apply-item">Contact us at support@fts.com</li>
          <li className="how-to-apply-item">
            All applicants must have valid drivers license and form of
            transportation
          </li>
        </ul>
      </div>

      <div className="application-section-container">
        <form action="" className="application-form">
          <label className="application-form-label" for="name">
            Drivers License
          </label>
          <input type="file" />
          <label className="application-form-label" for="name">
            Drug Screening
          </label>
          <input type="file" />
          <label className="application-form-label" for="name">
            First Aide / CPR Certification
          </label>
          <input type="file" />
          <label className="application-form-label" for="name">
            HIPPA Certification
          </label>
          <input type="file" />
          <label className="application-form-label" for="name">
            Completed DOT Exam
          </label>
          <input type="file" />
          <label className="application-form-label" for="name">
            Fingerprint Clearence Card
          </label>
          <input type="text" />
          <label className="application-form-label" for="name">
            Defensive Driving Course Certification
          </label>
          <input type="text" />
          <label className="application-form-label" for="name">
            State and NNJ Background Check
          </label>
          <input type="text" />
          <label className="application-form-label" for="name">
            39 Month Clean MVR
          </label>
          <input type="text" />
          <div className="dui-check-box">
            <label className="application-form-label" for="name">
              Have you received a DUI or other drug related offense within the
              past 7 years?
            </label>
            <br />
            <div style={{ marginBottom: "35px" }}></div>
            Yes <input type="radio" />
            No <input type="radio" />
          </div>
          <button className="apply-button">SUBMIT APPLICATION</button>
        </form>

        <img
          className="form-container-side-image"
          src="images/fts-logo.jpeg"
          alt="doctor"
        />
      </div>
    </div>
  );
};

export default Apply;
