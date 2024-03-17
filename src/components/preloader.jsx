import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations/preload";
import './preloader.css';

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Welcome,</span>
        <span>Admins.</span>
        <span></span>
      </div>
    </div>
  );
};

export default PreLoader;