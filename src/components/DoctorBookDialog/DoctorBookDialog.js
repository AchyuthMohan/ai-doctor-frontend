import React, { useEffect } from "react";
import { Dialog } from "@mui/material";
import "./DoctorBookDialog.css";
import { useState } from "react";
import { baseUrl } from "../../utils/urls";
import axiosInstance from "../../auth/authHandler";
const DoctorBookDialog = ({ open, handleClose, doctor }) => {
  const [date, setDate] = useState();  //setDate("2-3-14")
  const [time, setTime] = useState();
  const [subject, setSubject] = useState("");
  const [userId, setUserId] = useState(0);
  useEffect(() => {
    axiosInstance.get(`${baseUrl}/current-user/`).then((res) => {
      setUserId(res.data.id);
    });
  });

// booking function started
  const bookAppointment = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`${baseUrl}/book-appointment/`, {
        date: date,
        time: time,
        subject: subject,
        name_of_doctor: doctor.name,
        meet_link: doctor.meet_link,
        special: doctor.special,
        user_foreign: userId,
      })
      .then((response) => {
        console.log(response);
      });
  };

// booking function ended

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      PaperProps={{
        sx: { width: "50%", borderRadius: 5, m: 2, minHeight: "40vh" },
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
        <form onSubmit={bookAppointment} className="appt__book_dialog_main">
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter the reason"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <button type="submi">book appointment</button>
        </form>
      
    </Dialog>
  );
};

export default DoctorBookDialog;
