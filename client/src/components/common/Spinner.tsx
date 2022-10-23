import React from "react";
import "./spinner.scss";

const Spinner = ({ size }: { size: string }) => {
  return (
    <div className={`spinner-wrapper ${size}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
