import React, { useState } from 'react';

const PopupModal = ({ title, content, name1, name2, phone1, phone2, register, isVisible, toggle }) => {
  const [showAbout, setShowAbout] = useState(true);
  const [showOrganiser, setShowOrganiser] = useState(false);

  const toggleAbout = () => {
    setShowAbout(true);
    setShowOrganiser(false);
  };

  const toggleOrganiser = () => {
    setShowAbout(false);
    setShowOrganiser(true);
  };

  return (
    <div id="pop" className={isVisible ? 'new_active' : ''}>
      <h2 className="event_heading">{title}</h2>
      <div className="event_section">
        <button className="about-button" onClick={toggleAbout}>About</button>
        <button className="organiser-button" onClick={toggleOrganiser}>Organiser</button>
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
      <div className="modal-button">
        <a className="btn btn--green" onClick={() => toggle()}>Close</a>
        <a className="btn btn--green regi" href={`https://${register}`} target="_blank" rel="noopener noreferrer">Register</a>
      </div>
    </div>
  );
}

export default PopupModal;