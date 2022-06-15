import React from "react";
import "./pageHeading.css";

const PageHeading = (props) => {
  return (
    <div className="heading-container">
      <div className="overlay"></div>
      <h1 className="heading-h1">{props.children}</h1>
    </div>
  );
};

export default PageHeading;
