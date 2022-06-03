import React from "react";

const About = () => {
  return (
    <div>
      <div class="heading-container">
        <div class="overlay"></div>
        <h1 class="heading-h1">ABOUT US</h1>
      </div>

      <div class="about-container">
        <div class="about-content">
          <div class="about-top-section">
            <div class="about-content-section-1">
              <div class="map-overlay">
                <p>Servicing the valley and beyond</p>
                <p class="map-description">
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
              <h2 class="about-top-heading">ABOT FUTURE TRANS SYSTEMS</h2>
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

          <ul class="about-fts-top-list">
            <li class="about-fts-top-item">stuff</li>
            <li class="about-fts-top-item">stuff</li>
            <li class="about-fts-top-item">stuff</li>
            <li class="about-fts-top-item">stuff</li>
            <li class="about-fts-top-item">stuff</li>
            <li class="about-fts-top-item">stuff</li>
          </ul>

          <div class="about-bottom-section">
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
            <ul class="why-fts-list">
              <li class="why-fts-list-item">fast</li>
              <li class="why-fts-list-item">quick</li>
              <li class="why-fts-list-item">free</li>
              <li class="why-fts-list-item">time</li>
              <li class="why-fts-list-item">money</li>
              <li class="why-fts-list-item">more</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
