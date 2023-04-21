import React from "react";
import './DoctorList.css'
const DoctorCard = () => {
  return (
    <div className="doctor_card">
      <img
        src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4"
        alt=" "
      />
      <p className="doc__name_card">Doctor Name</p>
      <p className="doc__quali_card">Qualification</p>
      
    </div>
  );
};

export default DoctorCard;
