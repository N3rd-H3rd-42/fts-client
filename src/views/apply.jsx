import React, { useState, useRef } from "react";
import PageHeading from "../components/pages/pageHeading";
import "../css/apply.css";

const Apply = () => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [radioSelected, setRadioSelected] = useState(null);
  const fileInput = useRef(null);

  const onValueChange = (e) => {
    setRadioSelected({
      selectedOption: e.target.value,
    });
  };

  const handleFileUpload = (e) => {
    // handle validations
    const file = e.target.files[0];
    // if (file.size > 1024)
    //   onFileSelectError({ error: "File size cannot exceed more than 1MB" });
    // else onFileSelectSuccess(file);
  };

  const submitForm = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", selectedFile);

    // axios
    //   .post(UPLOAD_URL, formData)
    //   .then((res) => {
    //     alert("File Upload success");
    //   })
    //   .catch((err) => alert("File Upload Error"));
  };

  return (
    <div className="apply-container">
      <PageHeading>APPLY</PageHeading>
      <div className="apply-page-banner">
        <h1 className="apply-banner-h1">Drive With Future Trans Systems</h1>
        <div className="heading-underline"></div>
        <p className="apply-banner-p">
          Future Trans Systems is looking for drivers like you!
        </p>
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
        <form action="" className="application-form">
          <div className="application-general-information-container">
            <h2>Personal Information</h2>

            <label htmlFor="first-name">
              First Name
              <input
                placeholder="Enter your first name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label htmlFor="first-name">
              Last Name
              <input
                placeholder="Enter your last name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label htmlFor="birthdate">
              Birthdate
              <input
                type="date"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label htmlFor="birthdate">
              Phone Number
              <input
                type="date"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label htmlFor="birthdate">
              Email Address
              <input
                type="date"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          <div className="application-upload-files-container">
            <h2>Upload Documents</h2>
            <p>
              Some documents are not required upon submitting application
              however, all items listed below will be required in order to
              obtain employment. Future Trans Systems may assist in obtaining
              the required documents and completing additional requirements.
            </p>
            <label className="application-form-label" for="name">
              Drivers License (required)
              <input
                type="file"
                required="true"
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            </label>

            <label className="application-form-label" for="name">
              Drug Screening (optional)
              <input
                type="file"
                onChange={handleFileUpload}
                value={selectedFile}
              />
            </label>

            <label className="application-form-label" for="name">
              First Aide / CPR Certification (optional)
              <input
                type="file"
                onChange={handleFileUpload}
                value={selectedFile}
              />
            </label>

            <label className="application-form-label" for="name">
              HIPPA Certification (optional)
              <input
                type="file"
                onChange={handleFileUpload}
                value={selectedFile}
              />
            </label>

            <label className="application-form-label" for="name">
              Completed DOT Exam (optional)
              <input
                type="file"
                onChange={handleFileUpload}
                value={selectedFile}
              />
            </label>

            <label className="application-form-label" for="name">
              Fingerprint Clearence Card (optional)
              <input
                type="file"
                onChange={handleFileUpload}
                value={selectedFile}
              />
            </label>

            <label className="application-form-label" for="name">
              Defensive Driving Course Certification (optional)
              <input
                type="file"
                onChange={handleFileUpload}
                value={selectedFile}
              />
            </label>

            <label className="application-form-label" for="name">
              State and NNJ Background Check (optional)
              <input
                type="file"
                onChange={handleFileUpload}
                value={selectedFile}
              />
            </label>

            <label className="application-form-label" for="name">
              39 Month Clean MVR (optional)
              <input
                type="file"
                onChange={handleFileUpload}
                value={selectedFile}
              />
            </label>
          </div>

          <div className="application-final-req-container">
            <div className="dui-check-box">
              <h2>Background Information</h2>
              <p>
                The information below may not prevent you from working with
                Future Trans Systems however, some medical providers require
                specific provisions.
              </p>
              <label className="application-form-label" for="name">
                Have you received a DUI or other drug related offense within the
                past 7 years? (required)
              </label>
              <br />

              <div onChange={onValueChange}>
                <input type="radio" value="yes" name="yes" /> Yes
                <input type="radio" value="no" name="no" /> No
              </div>
            </div>
          </div>

          <button className="apply-button" onClick={(e) => submitForm}>
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
