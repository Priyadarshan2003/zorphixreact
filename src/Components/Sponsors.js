import React, { useEffect } from "react";
import git from "../img/git.png";
import hubsol from "../img/hubsolutionswhitecrop.jpeg";
import poorvi from "../img/poorvika.png";
import people_logo from "../img/people_logo-removebg-preview.png";
import cake_logo from "../img/cake_logo_white.png";
import "../App.css";
import Aos from "aos";
import 'aos/dist/aos.css';

const Sponsors = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
  })
  return (
    <div class="section-features" data-aos = "fade-down">
      <div class="u-center-text">
        <h2 class="heading-secondary white letter-spacing">Sponsored By</h2>
      </div>
      <div class="sponsor">
        {/* <div class="github-sponsor">
          <div class="section-sponsor-card" data-aos = "fade-right">
            <img src={git} class="git" alt="github" />
          </div>
        </div> */}
        <div class="row1">
          <div class="section-sponsor-card" data-aos = "fade-right">
            <img src={poorvi} class="i poorvika" alt="poorvika" />
          </div>

          <div class="section-sponsor-card" data-aos = "fade-right">
            <img src={hubsol} class="i hubsolutions" alt="hub solutions" />
          </div>
          {/* <div class="section-sponsor-card" data-aos = "fade-right">
            <img src={people_logo} alt="people's logo" class="i some-large" />
          </div>

          <div class="section-sponsor-card" data-aos = "fade-right">
            <img src={cake_logo} class="i padding-not" alt="interviewcake" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
