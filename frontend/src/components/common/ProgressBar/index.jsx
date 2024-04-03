import React from "react";
import "./style.scss"
const ProgressBar = ({ steps }) => {

  return (
    <>
      <div className="progress-bar">
        <div className={`step step-1 ${steps >= 1 && "active"}`}></div>
        <div className={`step step-2 ${steps >= 2 && "active"}`}></div>
        <div className={`step step-3 ${steps >= 3 && "active"}`}></div>
        <div className={`step step-4 ${steps >= 4 && "active"}`}></div>
      </div>
    </>
  );
};

export default ProgressBar;
