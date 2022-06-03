import React from "react";
import "./pageHeading.css";

const PageHeading = (props) => {
  return (
    <div class="heading-container">
      <div class="overlay"></div>
      <h1 class="heading-h1">{props.children}</h1>
    </div>
  );
};

export default PageHeading;
