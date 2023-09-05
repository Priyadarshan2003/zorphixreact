import React from "react";
import "../App.css";
import QRCode from "qrcode.react";

const EntryPass = () => {
  
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div id="EntryPass" className="section-EntryPass">
      <div class="u-center-text">
                <h2 class="heading-secondary white letter-spacing">Your Entry Pass</h2>
            </div>
            {!userData ? (
                <div style={{color:'white'}} className="qrdiv">
                  <a href="/login" className="btn btn--white btn--animated bold"><h3>Login to get Entry Pass</h3></a>
                <br>
              </br>
              </div>
            ) : (
               <div className="qrdiv">
                 <QRCode className="qrcodeimage" value = {userData.zorid} size={200} />
                </div> 
            )}
    </div>
  );
};

export default EntryPass;
