import React from "react";
import "./Loader.css";
import zorphixlogo from '../../img/zorphix-landing-logo.png'

const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        <img src={zorphixlogo} alt=""/>
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;