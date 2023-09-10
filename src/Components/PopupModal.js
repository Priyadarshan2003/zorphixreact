import React, { useState } from 'react';
import '../App.css'
import '../component-css/Popup.css';

const PopupModal = ({ title, content, name1, name2, phone1, phone2, register, venue, isVisible, toggle }) => {
  const [showAbout, setShowAbout] = useState(true);
  const [showOrganiser, setShowOrganiser] = useState(false);
  const [showVenue, setShowVenue] = useState(false); 

  const toggleAbout = () => {
    setShowAbout(true);
    setShowOrganiser(false);
    setShowVenue(false); 
  };

  const toggleOrganiser = () => {
    setShowAbout(false);
    setShowOrganiser(true);
    setShowVenue(false); 
  };

  const toggleVenue = () => {
    setShowAbout(false);
    setShowOrganiser(false);
    setShowVenue(true);
  };

  return (
    <div className="popup-container">
      <div className={`background-blur ${isVisible ? 'active' : ''}`}></div>
      <div id="pop" className={isVisible ? 'new_active' : ''}>

        <div>
          <h2 className="event_heading">{title}</h2>
          <div className="event_section">
            <button className="about-button" onClick={toggleAbout}>About</button>
            <button className="organiser-button" onClick={toggleOrganiser}>Organiser</button>
            <button className="venue-button" onClick={toggleVenue}>Venue</button>
          </div>
          {showAbout ? (
            <p className="event_content">{content}</p>
          ) : null}
          {showOrganiser ? (
            <div className="org">
              <div className="org1">
                <h2 className="org1-name">{name1}</h2>
                <p>ORGANISER</p>
                <p className="org1-phone">{phone1}</p>
              </div>
              <div className="org2">
                <h2 className="org2-name">{name2}</h2>
                <p>ORGANISER</p>
                <p className="org2-phone">{phone2}</p>
              </div>
            </div>
          ) : null}
          {showVenue ? (
            <div className="venue">
              <div className='text-center'>
                <h1>{venue}</h1>
              </div>
            </div>
          ) : null}
          <div className="modal-button">
            <a className="btn font-close btn--green" onClick={() => toggle()}>Close</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupModal;
