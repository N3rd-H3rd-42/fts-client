import React from "react";

const DriveWithFts = () => {
  const handleClick = () => {
    window.location = "/apply";
    return;
  };

  return (
    <div id="drive-with-fts">
      <div className="drive-with-fts-overlay"></div>

      <div className="drive-with-fts-container">
        <h1>DRIVE WITH FTS</h1>
        <h3>
          Drive with FTS, we are safe, fast and reliable. Partners across
          Arizona are now riding with FTS.
        </h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quo ipsam
          ad officia dicta explicabo assumenda at magni, id aliquid totam
          consequatur ratione facilis optio amet tempore aut alias fuga. A
          nesciunt maxime perferendis illo consequatur quas quaerat consectetur
          repudiandae architecto quod esse quibusdam possimus, laborum
          temporibus odit repellat molestiae autem modi maiores. Laudantium
          quibusdam aut delectus cum aperiam placeat!
        </p>

        <button onClick={handleClick} className="home-apply-btn">
          APPLY
        </button>
      </div>

      <div className="bottom-overlay">
        <p>
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
