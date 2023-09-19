import React, { useEffect } from "react";
import hubsol from "../img/hubsoln.jpeg";
import poorvi from "../img/poorvika.png";
import ovi from "../img/ovi.jpg";
import "../App.css";
import Aos from "aos";
import 'aos/dist/aos.css';

const Sponsors = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
  })
  return (
    <div className="section-features" data-aos = "fade-down">
      <div className="u-center-text">
        <h2 className="heading-secondary white letter-spacing">Sponsored By</h2>
      </div>
      <div className="sponsor">
        {/* <div class="github-sponsor">
          <div class="section-sponsor-card" data-aos = "fade-right">
            <img src={git} class="git" alt="github" />
          </div>
        </div> */}
        <div className="row1">
          <div className="section-sponsor-card" data-aos = "fade-right">
            <img src={poorvi} className="i poorvika" alt="poorvika" />
          </div>

          <div className="section-sponsor-card" data-aos = "fade-right">
            <img src={hubsol} className="i hubsolutions" alt="hub solutions" />
          </div>
          
          <div className="section-sponsor-card" data-aos = "fade-right">
            <img src={ovi} className="i ovi" alt="ovi design academy" />
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
