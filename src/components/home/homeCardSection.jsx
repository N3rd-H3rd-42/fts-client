import React from "react";

const HomeCardSection = () => {
  return (
    <div id="cards-section">
      <div className="home-cards card1">
        <i className="fa-solid fa-car-side fa-5x"></i>
        <h2>Simple</h2>
        <p>
          Requesting an NEMT ride is as simple as clicking on one of our Request
          A Ride links, completing the request form and as soon as the request
          is received, we will begin scheduling your request.
        </p>
      </div>

      <div className="home-cards card2">
        <i className="fa-solid fa-people-group fa-5x"></i>
        <h2>Reliable</h2>
        <p>
          Future Trans Systems is trusted by over 130 Medical Facilities and
          Clinics throughout Arizona. We take great pride in providing safe and
          effective transportation services.
        </p>
      </div>

      <div className="home-cards card3">
        <i className="fa-solid fa-hand-holding-medical fa-5x"></i>
        <h2>Safe</h2>
        <p>
          Assuring you arrive safely and on time to your appointments is our top
          priority. We take extra measures to vet our drivers and even more
          measures to assure you travel experience is seamless.
        </p>
      </div>
    </div>
  );
};

export default HomeCardSection;
