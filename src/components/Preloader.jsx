import React from "react";
import { useEffect } from "react"
import { preLoaderAnim } from "../Animations";

const Preloader = () => {
  
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
          <span className="span">Design</span>
          <span className="span">Develop</span>
          <span className="span">Deploy</span>
      </div>
    </div>  

  )
}

export default Preloader