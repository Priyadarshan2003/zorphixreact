import React from "react";
import "./Loader.css";
import loadervid from '../../video/loader1.mp4';

const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={loadervid} type="video/mp4" />
          Your browser is not supported!
        </video>
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;