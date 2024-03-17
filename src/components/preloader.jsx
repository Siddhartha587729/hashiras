import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations/preload";
import './preloader.css';

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container flex flex-col">
        <span>Welcome, Admins.</span>
        <span className="text-sm">Best viewed at 80% zoom</span>
      </div>
    </div>
  );
};

export default PreLoader;