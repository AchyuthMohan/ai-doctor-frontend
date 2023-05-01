import React from "react";
import "./DoctorList.css";
import DoctorBookDialog from "../../components/DoctorBookDialog/DoctorBookDialog";
import { useState } from "react";
const DoctorProfile = ({ doctor }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="doc__profile__main">
      <DoctorBookDialog open={open} handleClose={handleClose} doctor={doctor} />
      <div className="image__section_profile">
        <img src={doctor.image} alt=" " />
        <p>{doctor.name}</p>
      </div>
      <div className="personal__doc_profile_info">
        <p className="doc_name_inside_profile">{doctor.name}</p>
        <p>{doctor.special}</p>
        <div className="exp__profile_doc">
          <p>years of experience: {doctor.experience}</p>
          <p>Education: {doctor.education}</p>
          <p>consulation days: {doctor.consultation_days}</p>
          <p>consulation time: {doctor.consultation_time}</p>
        </div>
      </div>
      <div className="book__appt_profile">
        <button
          className="book__apt_btn"
          onClick={() => {
            setOpen(true);
          }}
        >
          BOOK APPOINTMENT
        </button>
      </div>
    </div>
  );
};

export default DoctorProfile;
