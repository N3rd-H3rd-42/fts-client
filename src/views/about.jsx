import React from "react";
import PageHeading from "../components/pages/pageHeading";
import "../css/about.css";

const About = () => {
  return (
      <div className="about-container">
        <PageHeading>ABOUT US</PageHeading>
        <div className="about-content">
          <div className="about-top-section">
            <div className="about-content-section-1">
              <div className="map-overlay">
                <p>Servicing the valley and beyond</p>
                <p className="map-description">
                  map *Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam culpa, quod sunt asperiores mollitia dolorem fugit id
                  unde enim veniam quos, quam aliquid a. Aperiam est ex
                  quibusdam esse voluptatibus.
                </p>
              </div>

              <img
                src="images/medical_clinic.jpg"
                alt="med-doc"
                style={{ padding: "20px", height: "500px" }}
              />
              <h2 className="about-top-heading">ABOT FUTURE TRANS SYSTEMS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum quae ab obcaecati, aut at quasi Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Aliquid aperiam nesciunt modi
                laborum, cum velit possimus consequuntur error, nobis quidem quo
                soluta mollitia quasi molestias laudantium. Voluptates ducimus
                esse asperiores? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Esse odio ea fugit magnam voluptatum
                voluptatem totam. Possimus quibusdam et voluptate est, earum,
                totam quis sequi veritatis suscipit itaque neque eius?
                aspernatur evur eveniet quibus.
              </p>
            </div>
          </div>

          <ul className="about-fts-top-list">
            <li className="about-fts-top-item">stuff</li>
            <li className="about-fts-top-item">stuff</li>
            <li className="about-fts-top-item">stuff</li>
            <li className="about-fts-top-item">stuff</li>
            <li className="about-fts-top-item">stuff</li>
            <li className="about-fts-top-item">stuff</li>
          </ul>

          <div className="about-bottom-section">
            <p>
              about us Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur numquam repudiandae expedita consectetur ex facilis
              accusamus architecto laboriosam laborum nobis reiciendis sapiente
              deserunt quam voluptate sint soluta odit, aspernatur tempore
              xpedita consectetur ex facilis accusamus architecto laboriosam
              laborum nobis reiciendis sapiente deserunt quam voluptate sint
              soluta odit, aspernatur tempore. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Omnis, nulla nostrum. Animi
              excepturi, iusto harum rerum magni dolorum adipisci pariatur
              delectus. Beatae culpa vel consequuntur minima repudiandae
              dignissimos atque dicta!
            </p>
          </div>

          <div>
            <h3>Why FTS?</h3>
            <ul className="why-fts-list">
              <li className="why-fts-list-item">fast</li>
              <li className="why-fts-list-item">quick</li>
              <li className="why-fts-list-item">free</li>
              <li className="why-fts-list-item">time</li>
              <li className="why-fts-list-item">money</li>
              <li className="why-fts-list-item">more</li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default About;
