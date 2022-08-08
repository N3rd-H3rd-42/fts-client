import React, { useState } from "react";
import PageHeading from "../components/pages/pageHeading";
import emailjs from 'emailjs-com';
import "../css/apply.css";

const Apply = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    birthdate: "",
    license: "",
    drug_screening: "",
    cpr: "",
    dot: "",
    hippa: "",
    mvr: "",
    finger_print_clearence: "",
    defensive_driving_course: "",
    state_And_Nnj_Background: "",
    dui_status: "",
  });

  const [submitted, setSubmitted] = useState(false);

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
    console.log(values, values.firstName)
  };

  const {
    REACT_APP_EMAIL_SERVICE_ID,
    REACT_APP_EMAIL_USER_ID,
    REACT_APP_EMAIL_APPLY_TEMPLATE,
  } = process.env;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = values;
    // call api and ship values
    emailjs
      .sendForm(
        REACT_APP_EMAIL_SERVICE_ID,
        REACT_APP_EMAIL_APPLY_TEMPLATE,
        e.target,
        REACT_APP_EMAIL_USER_ID
      )
      .then((response) => {
        if (response) window.location.reload();
      })
      .catch((error) => {
        console.log('!!!dev error!!!', error.text);
      });
    console.log(data, "data");

    setValues({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      birthdate: "",
      license: "",
      drug_screening: "",
      cpr: "",
      dot: "",
      hippa: "",
      mvr: "",
      finger_print_clearence: "",
      defensive_driving_course: "",
      state_And_Nnj_Background: "",
      dui_status: "",
    });

    setSubmitted(true);
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
          Future Trans Systems is looking for committed drivers who care about
          their passengers. We understand the important in providing a safe job
          as well as safe transportation for our clients. We also understand
          that our NEMT drivers deserve the best flexability and communication
          we can provide in order to find a good work life balance and perform
          their jobs at the top of their abilities. At Future Trans Systems, we
          care about all of our staff and it shows.
        </p>

        <h3>Equal Opportunies for All</h3>
        <p>
          Future Trans Systems is an equal opportunity employer that is
          committed to diversity and inclusion in the workplace. We prohibit
          discrimination and harassment of any kind based on race, color, sex,
          religion, sexual orientation, national origin, disability, genetic
          information, pregnancy, or any other protected characteristic as
          outlined by federal, state, or local laws. This policy applies to all
          employment practices within our organization, including hiring,
          recruiting, promotion, termination, layoff, recall, leave of absence,
          compensation, benefits, training, and apprenticeship. Future Trans
          Systems makes hiring decisions based solely on qualifications, merit,
          and business needs at the time.
        </p>

        <h3>Requirements</h3>
        <p className="apply-requirements">
          Becoming an NEMT does require several steps and certifications in
          order to assure you are well prepared and equipped for your travels
          ahead and also to maintain government compliance. You may upload the
          documents with your application below if you have them available, if
          not, don't fret. Future Trans Systems will help you get all of your
          ducks in a row and on the job as quick as possible. Some of the things
          you may need are the following: Valid drivers license, HIPPA
          Certifications, Defensive Drivers Certification, a printout of your
          Moter Vegicle Records, Driving record clean of Dui's for 7 years,
          fingerprint clearence, cpr certification, clean drug screening and
          must pass a State and Navajo Nations background check.
        </p>
      </div>

      <div className="apply-details-container">
        <h3>How to apply</h3>
        <p className="how-to-apply-section">
          Complete the form below and upload any documents you may have
          available or certifications you may have already completed. Uploading
          documents is not required upon applying however, it will save time and
          get you driving with Future Trans Systems sooner. Please contact us
          with any questions, comments or concerns.
        </p>

        <ul className="how-to-apply-list">
          <li className="how-to-apply-item">
            Complete the application form below
          </li>
          <li className="how-to-apply-item">
            Upload all official Documents (optional) unless otherwise noted.
          </li>
          <li className="how-to-apply-item">Contact us at monicam@fts.com</li>
          <li className="how-to-apply-item">
            All applicants must have valid drivers license and form of
            transportation.
          </li>
        </ul>
        <div>
          <div className="credential-links">
            <h4>
              The sources below are provided for credentials that can be
              obtained online.
            </h4>
            <a className="credential-link" href="https://www.courseforhipaa.com" rel="noreferrer" target="_blank">
              HIPAA
            </a>
            <a className="credential-link" href="https://www.myimprov.com" rel="noreferrer" target="_blank">
              Defensive Driving Course
            </a>
            <a className="credential-link" href="https://www.nationalcprfoundation.com" rel="noreferrer" target="_blank">
              First aid and CPR
            </a>
          </div>
        </div>
      </div>

      <div className="application-section-container">
        <form
          action="POST"
          onSubmit={(e) => handleSubmit(e)}
          className="application-form"
        >
          <div className="first-form-app-section">
            <div className="application-general-information-container">
              <h2>Personal Information</h2>

              <label htmlFor="first_name">
                First Name
                <input
                  placeholder="Enter your first name"
                  name="first_name"
                  type="text"
                  onChange={(e) => onChange(e)}
                  required={true}
                  value={values.first_name}
                />
              </label>

              <label htmlFor="last_name">
                Last Name
                <input
                  placeholder="Enter your last name"
                  type="text"
                  name="last_name"
                  onChange={onChange}
                  required={true}
                  value={values.last_name}
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
                  value={values.birthdate}
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
                  value={values.phone}
                />
              </label>

              <label htmlFor="sender_email">
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  onChange={onChange}
                  required={true}
                  value={values.email}
                />
              </label>
            </div>

            <div className="application-final-req-container">
              <h2>Background Information</h2>
              <p>
                The information below may not prevent you from working with
                Future Trans Systems however, some medical providers require
                specific provisions.
              </p>
              <div className="dui-check-box">
                <label className="application-form-label" htmlFor="name">
                  Have you received a DUI or other drug related offense within
                  the past 7 years? (required)
                </label>

                <br />

                <div onChange={onChange}>
                  <div className="input-item-container">
                    <p>Yes</p>
                    <input
                      type="radio"
                      value="yes"
                      name="dui_status"
                      onChange={onChange}
                    />{" "}
                  </div>
                  <div className="input-item-container">
                    <p>No</p>{" "}
                    <input
                      type="radio"
                      value="no"
                      name="dui_status"
                      onChange={onChange}
                      style={{ marginLeft: "12px" }}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="second-app-section">
            <div className="application-upload-files-container">
              <h2>Upload Documents</h2>
              <p className="upload-docs-p">
                Some documents are not required upon submitting application
                however, all items listed below will be required in order to
                obtain employment. Future Trans Systems may assist in obtaining
                the required documents and completing additional requirements.
                To help expadite the process, please upload any documents you
                may already have available.
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
                  name="drug_screening"
                  onChange={(e) => onChange(e)}
                  required={false}
                // accept="image/png, image/jpeg"
                value={values.drug_screening}
                />
              </label>

              <label className="application-form-label" htmlFor="name">
                First Aide / CPR Certification (optional)
                <input
                  type="file"
                  name="cpr"
                  onChange={(e) => onChange(e)}
                  required={false}
                  value={values.cpr}
                // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
              </label>

              <label className="application-form-label" htmlFor="name">
                HIPPA Certification (optional)
                <input
                  type="file"
                  name="hippa"
                  onChange={(e) => onChange(e)}
                  required={false}
                  value={values.hippa}
                // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
              </label>

              <label className="application-form-label" htmlFor="name">
                Completed DOT Exam (optional)
                <input
                  type="file"
                  onChange={(e) => onChange(e)}
                  required={false}
                  name="dot"
                  value={values.dot}
                // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
              </label>

              <label className="application-form-label" htmlFor="name">
                Fingerprint Clearence Card (optional)
                <input
                  type="file"
                  onChange={(e) => onChange(e)}
                  required={false}
                  name="finger_print_clearence"
                  value={values.finger_print_clearence}
                // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
              </label>

              <label className="application-form-label" htmlFor="name">
                Defensive Driving Course Certification (optional)
                <input
                  type="file"
                  name="defensive_driving_course"
                  onChange={(e) => onChange(e)}
                  required={false}
                  value={values.defensive_driving_course}
                // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
              </label>

              <label className="application-form-label" htmlFor="name">
                State and NNJ Background Check (optional)
                <input
                  type="file"
                  onChange={(e) => onChange(e)}
                  name="satte_And_Nnj_Background"
                  value={values.state_And_Nnj_Background}
                  required={false}
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
                  value={values.mvr}
                // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
              </label>
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
      {submitted ? 'Thank you your application has been submitted' : null}
    </div>
  );
};

export default Apply;
