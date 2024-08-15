import React, { useEffect, useState } from "react";
import { preLoaderAnim } from "../Animations";

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    preLoaderAnim();
    
    // Assuming your preloader animation takes 3 seconds, adjust as needed
    const timer = setTimeout(() => {
      onComplete();  // Notify parent that preloader is done
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span className="span">Design</span>
        <span className="span">Develop</span>
        <span className="span">Deploy</span>
      </div>
    </div>  
  );
}

export default Preloader;
