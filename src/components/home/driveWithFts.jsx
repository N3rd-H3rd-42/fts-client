import React from "react";

const DriveWithFts = () => {

  const handleClick = () => {
    window.location = "/apply";
    return;
  };

  return (
    <div id="drive-with-fts">
      <div className="drive-with-fts-overlay"></div>

      <div className="drive-with-fts-main-content">
        <div id="drive-with-fts-side-img"></div>
        <div className="drive-with-fts-container">
          <h1>DRIVE WITH FTS</h1>
          <h3>
            Drive with FTS, we are safe, fast and reliable. Partners across
            Arizona are now riding with FTS.
          </h3>

          <p>
            Future Trans Systems is always looking for safe and reliable drivers. Applying is easy. Join our dynamic and flexible team by following the link below and completing our online application. Our team will help you apply for required credentials and get you on the road quickly.
          </p>

          <button onClick={handleClick} className="home-apply-btn">
            APPLY
          </button>
        </div>
      </div>

      <div className="bottom-overlay">
        <p className="bottom-overlay-p">
          Future Trans Systems puts our employees and customers safety first.
          That is why we are trusted by more than 130 medical facilities and
          clinic in Arizona and abroad.
        </p>
        <img
          id="drive-with-fts-img"
          src="images/fts-logo.jpeg"
          alt="fts-logo"
        />
      </div>
    </div>
  );
};

export default DriveWithFts;
