import React, { useEffect } from "react";
import "../App.css";
import QRCode from "qrcode.react";
import Aos from "aos";
import 'aos/dist/aos.css';


const EntryPass = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
  },[])

  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div id="EntryPass" className="section-EntryPass" data-aos = "fade-down">
      <div class="u-center-text">
        <h2 class="heading-secondary white letter-spacing">Your Entry Pass</h2>
      </div>
      {!userData ? (
        <div style={{ color: "white" }} className="qrdiv">
          <a href="/login" className="btn btn--white btn--animated bold">
            <h3 className="mt-2">Login to get Entry Pass</h3>
          </a>
          <br></br>
        </div>
      ) : (
        <div className="qrdiv">
          <div className="qrDivContent">
          <QRCode
            className="qrcodeimage"
            value={`
    ID: ${userData.zorid}
    Name: ${userData.fullName}
    College: ${userData.college}
    Degree: ${userData.degree}
    Dept: ${userData.dept}
    Year: ${userData.year}
    Event1 : ${userData.event1}
    Event2 : ${userData.event2}
    Event3 : ${userData.event3}
    Event4 : ${userData.event4}
    Event5 : ${userData.event5}
    Workshop1 : ${userData.workshop1}
    Workshop2 : ${userData.workshop2}
  `}
            size={200}
          />
          <h3>ID : {userData.zorid}</h3>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default EntryPass;
