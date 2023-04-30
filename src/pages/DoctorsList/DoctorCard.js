import React from "react";
import "./DoctorList.css";
const DoctorCard = ({ key, name, image, spec }) => {
  return (
    <div className="doctor_card">
      <img
        src={image}
        alt=" "
      />
      <p className="doc__name_card">Dr. {name}</p>
      <p className="doc__quali_card">{spec}</p>
    </div>
  );
};

export default DoctorCard;
