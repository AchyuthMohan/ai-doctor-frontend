import React from "react";
import "./Bubbles.css";
const Bubbles = ({ children }) => {
  return (
    <>
      {children}
      {/* <div class="area" > */}
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    {/* </div > */}
    </>
  );
};
export default Bubbles;
