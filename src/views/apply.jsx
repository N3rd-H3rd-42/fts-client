import React, { useState } from "react";
import PageHeading from "../components/pages/pageHeading";
import "../css/apply.css";

const Apply = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthdate: "",
    license: "",
    drugScreening: "",
    cpr: "",
    dot: "",
    hippa: "",
    mvr: "",
    fingerPrintClearence: "",
    defensiveDrivingCourse: "",
    stateAndNnjBackground: "",
    dui: "",
  });

  const onChange = (e) => {
    if (e.target.files) {
      let valueName = e.target.name;
      let files = e.target.files;
      let reader = new FileReader();

      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        // data lives in e.target.result
        // setValues hook here
        setValues({ ...values, [valueName]: e.target.result });
      };
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
    console.log(values, "values");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = values;
    // call api and ship values
    console.log(data, "data");
  };

  // const handleFileUpload = (e) => {
  //   let files = e.target.files;
  //   let reader = new FileReader();

  //   reader.readAsDataURL(files[0]);
  //   reader.onload = (e) => {
  //     // data lives in e.target.result
  //     // setValues hook here
  //   };
  // };

  return (
    <div className="apply-container">
      <PageHeading>APPLY</PageHeading>
      <div className="apply-page-banner">
        <h1 className="apply-banner-h1">
          Future Trans Systems is looking for drivers like you!
        </h1>
        <div className="heading-underline"></div>
        {/* <p className="apply-banner-p">
          Future Trans Systems is looking for drivers like you! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, dolor corporis sed inventore.</p> */}
      </div>

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
          <li className="how-to-apply-item">
            Must upload all official documents
          </li>
          <li className="how-to-apply-item">Contact us at support@fts.com</li>
          <li className="how-to-apply-item">
            All applicants must have valid drivers license and form of
            transportation
          </li>
        </ul>
      </div>

      <div className="application-section-container">
        <form
          action="POST"
          onSubmit={(e) => handleSubmit(e)}
          className="application-form"
        >
          <div className="application-general-information-container">
            <h2>Personal Information</h2>

            <label htmlFor="firstName">
              First Name
              <input
                placeholder="Enter your first name"
                name="firstName"
                type="text"
                onChange={onChange}
                required={true}
              />
            </label>

            <label htmlFor="lastName">
              Last Name
              <input
                placeholder="Enter your last name"
                type="text"
                name="lastName"
                onChange={onChange}
                required={true}
              />
            </label>

            <label htmlFor="birthdate">
              Birthdate
              <input
                type="date"
                name="birthdate"
                placeholder="select your birthdate"
                onChange={onChange}
                required={true}
              />
            </label>

            <label htmlFor="phone">
              Phone Number
              <input
                type="phone"
                name="phone"
                placeholder="enter your phone number"
                onChange={onChange}
                required={true}
              />
            </label>

            <label htmlFor="email">
              Email Address
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                onChange={onChange}
                required={true}
              />
            </label>
          </div>

          <div className="application-upload-files-container">
            <h2>Upload Documents</h2>
            <p>
              Some documents are not required upon submitting application
              however, all items listed below will be required in order to
              obtain employment. Future Trans Systems may assist in obtaining
              the required documents and completing additional requirements. To
              help expadite the process, please upload any documents you may
              already have available.
            </p>
            <label className="application-form-label" htmlFor="license">
              Drivers License (required)
              <input
                type="file"
                name="license"
                onChange={(e) => onChange(e)}
                required={true}
                // accept="image/png, image/jpeg"
              />
            </label>

            <label className="application-form-label" htmlFor="name">
              Drug Screening (optional)
              <input
                type="file"
                name="drugScreening"
                onChange={(e) => onChange(e)}
                required={true}
                // accept="image/png, image/jpeg"
              />
            </label>

            <label className="application-form-label" htmlFor="name">
              First Aide / CPR Certification (optional)
              <input
                type="file"
                name="cpr"
                onChange={(e) => onChange(e)}
                required={true}
                // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
            </label>

            <label className="application-form-label" htmlFor="name">
              HIPPA Certification (optional)
              <input
                type="file"
                name="hippa"
                onChange={(e) => onChange(e)}
                required={true}
                // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
            </label>

            <label className="application-form-label" htmlFor="name">
              Completed DOT Exam (optional)
              <input
                type="file"
                onChange={(e) => onChange(e)}
                required={true}
                name="dot"
                // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
            </label>

            <label className="application-form-label" htmlFor="name">
              Fingerprint Clearence Card (optional)
              <input
                type="file"
                onChange={(e) => onChange(e)}
                required={true}
                name="fingerPrintClearence"
                // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
            </label>

            <label className="application-form-label" htmlFor="name">
              Defensive Driving Course Certification (optional)
              <input
                type="file"
                name="defensiveDrivingCourse"
                onChange={(e) => onChange(e)}
                required={true}
                // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
            </label>

            <label className="application-form-label" htmlFor="name">
              State and NNJ Background Check (optional)
              <input
                type="file"
                onChange={(e) => onChange(e)}
                name="sateAndNnjBackground"
                required={true}
                // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
            </label>

            <label className="application-form-label" htmlFor="name">
              39 Month Clean MVR (optional)
              <input
                type="file"
                onChange={(e) => onChange(e)}
                required={false}
                name="mvr"
                // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
            </label>
          </div>

          <div className="application-final-req-container">
            <h2>Background Information</h2>
            <p>
              The information below may not prevent you from working with Future
              Trans Systems however, some medical providers require specific
              provisions.
            </p>
            <div className="dui-check-box">
              <label className="application-form-label" htmlFor="name">
                Have you received a DUI or other drug related offense within the
                past 7 years? (required)
              </label>

              <br />

              <div onChange={onChange}>
                <div className="input-item-container">
                  <p>Yes</p>
                  <input
                    type="radio"
                    value="yes"
                    name="dui"
                    onChange={onChange}
                  />{" "}
                </div>
                <div className="input-item-container">
                  <p>No</p>{" "}
                  <input
                    type="radio"
                    value="no"
                    name="dui"
                    onChange={onChange}
                    style={{marginLeft: '12px'}}
                  />{" "}
                </div>
              </div>
            </div>
          </div>

          <button className="apply-button" onSubmit={(e) => handleSubmit(e)}>
            SUBMIT APPLICATION
          </button>
        </form>
        {/* 
        <img
          className="form-container-side-image"
          src="images/fts-logo.jpeg"
          alt="doctor"
        /> */}
      </div>
    </div>
  );
};

export default Apply;
