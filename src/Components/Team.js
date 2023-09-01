import React from 'react';
import video from '../video/video.mp4'


const Team = () => {
  return (
    <div className="team section-stories" id="team">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          <source src="img/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Our Team</h2>
      </div>
      <div className="main-section">
        <div className="box">
          <h2 className="position">President</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Raveen RV
          </h3>
          <p>+91 90921 25904</p>
        </div>
        <div className="box">
          <h2 className="position">Vice President</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">Bharath</h3>
          <p>+91 97515 83361</p>
        </div>
        {/* <div className="box">
          <h2 className="position">Core Organizer</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Alen Joseph Babu & Bhuvanesh
          </h3>
          <p>+91 8825994012</p>
        </div> */}
        <div className="box">
          <h2 className="position">Treasurer</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">Karan & Sheryl</h3>
          <p>+91 73976 59717</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
