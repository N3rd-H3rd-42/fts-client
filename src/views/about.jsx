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
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos totam
          rerum ab, sit voluptatem ea, nobis vitae deleniti aliquid quasi
          suscipit accusantium esse, omnis nemo voluptatum. Velit quisquam atque
          maxime. Deserunt voluptas, ab modi at debitis iure unde, doloribus non
          alias, illo nesciunt ipsa atque. Libero voluptate perferendis quis
          repellat. Numquam doloremque, distinctio debitis eum vel similique
          quae temporibus perspiciatis?
        </p>
      </div>
      <div className="about-content">

        <div className="about-section-2">
          <h1>Our Mission</h1>
          <div
            className="heading-underline"
            style={{ borderTop: "3px solid #ff0000", width: "170px" }}
          ></div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            exercitationem dolorem sapiente neque eum aliquam accusamus quaerat
            soluta nemo tempore maiores aspernatur rerum numquam odit, tenetur
            laudantium laborum corporis eaque. Iure dicta error doloribus culpa
            deleniti officia sapiente rerum dolorum deserunt sint beatae quidem
            vero, magnam fugit distinctio, ut neque reprehenderit quos, amet
            quae unde voluptatem illo. Magnam, nisi recusandae.
          </p>
        </div>

        <div className="about-section-3">
          <h2>Our Partners</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            officia doloremque, perspiciatis eligendi provident hic quaerat
            aspernatur rerum cumque qui porro, tempora harum ducimus error ad
            accusamus architecto nostrum quis? Illo alias aut accusantium
            adipisci est ab temporibus quibusdam culpa tempore corporis quaerat
            quod magnam commodi consectetur id laudantium obcaecati repudiandae
            nisi eum aperiam, reprehenderit ad asperiores eos eligendi?
            Provident.
          </p>
        </div>
      </div>
      <div className="about-section-bottom-banner">
        <div className="about-section-bottom-banner-overlay">
          <div className="about-bottom-banner-text">
            <h1>WE WANT TO CARE FOR YOU</h1>
            <div className="heading-underline" style={{ width: "200px" }}></div>
            <h2>LET US DRIVE YOU TO YOUR NEXT APPOINTMENT</h2>
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
