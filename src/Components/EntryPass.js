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
ID: ${userData._id}
Reference No. : ${userData.zorid}
Name: ${userData.fullName}
College: ${userData.college}
Degree: ${userData.degree}
Year: ${userData.year}
Dept: ${userData.dept}
Contact No : ${userData.contactNo}
E mail : ${userData.email}
Xcoders : ${userData.xcoders}
Thesis-Precized : ${userData.thesis_precized}
Coin Quest : ${userData.coin_quest}
Plutus : ${userData.plutus}
Algo-Rhythms : ${userData.algo_rhythms}
Flip it & Quiz it : ${userData.flip_it}
Virtuoso : ${userData.vituoso}

  `}
            size={250}
          />
          <h3>Reference no. {userData.zorid}</h3>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default EntryPass;
