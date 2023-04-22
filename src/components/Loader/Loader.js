import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="loader__enwrapper">
      <div className="loader__suspense_container">
        <span className="one spanner"></span>
        <span className="two spanner"></span>
        <span className="three spanner"></span>
        <span className="four spanner"></span>
      </div>
    </div>
  );
};

export default Loader;