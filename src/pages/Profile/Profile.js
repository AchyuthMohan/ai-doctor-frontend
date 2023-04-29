import React, { useEffect, useState } from "react";
import "./Profile.css";
import axiosInstance from "../../auth/authHandler";
import { baseUrl } from "../../utils/urls";
import EditProfileDialog from "../../components/EditProfileDialog/EditProfileDialog";
const Profile = () => {
  const [curr_username, setCurr_username] = useState("");
  const [currEmail, setCurrEmail] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [currUserid, setcurrUserid] = useState();
  const [actualname, setActualname] = useState("");
  const [userimg, setUserimg] = useState();
  const [open, setOpen] = useState(false);
  const [dob, setDob] = useState("");
  const [userImage, setUserImage] = useState();
  const handleClose = () => setOpen(false);
  const [userDetailId, setUserDetailId] = useState(0);
  useEffect(() => {
    axiosInstance.get(`${baseUrl}/current-user/`).then(
      (response) => {
        console.log(response);
        setCurr_username(response.data.username);
        setCurrEmail(response.data.email);
        setcurrUserid(response.data.id);

        localStorage.setItem("userid", response.data.id);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  useEffect(() => {
    axiosInstance.get(`${baseUrl}/user-detail/`).then((response) => {
      console.log(response);
      response.data.forEach((item) => {
        if (item.user_foreign === currUserid) {
          setUserImage(item.user_image);
          setUserDetailId(item.id);
          setActualname(item.actual_name);
          setAge(response.data.age);
          setGender(response.data.gender);
          setDob(response.data.dob);
        }
      });
    });
  });
  return (
    <div className="profile__main_pg">
      <div className="profile__card">
        <img src={userImage} alt="" />
        <div className="profile__card_details_sect">
          <p>{actualname}</p>
          <p>AD{currUserid}</p>
          <p>Age:{age}</p>
          <p>Gender: {gender}</p>
          <p>username:{curr_username}</p>
          <p>DOB:{dob}</p>
          <p>Email:{currEmail}</p>

          <button
            onClick={() => {
              setOpen(true);
            }}
            
          >
            Edit profile
          </button>
          <EditProfileDialog
            open={open}
            handleClose={handleClose}
            userDetailId={userDetailId}
            actualname={actualname}
            userimg={userimg}
            setActualname={setActualname}
            setUserimg={setUserimg}
          />
        </div>
      </div>
      <div className="booking__section">
        <div className="profile__activ_box">
          <div className="profile__head">APPOINTMENTS</div>

          <div className="apt__booked_data">
            <span>1.</span>
            <span>Dr. Robin</span>
            <span>10:00am</span>
            <span>12-04-2023</span>
            <span>https://meet.google.com/wer-kju-kdj</span>
          </div>
        </div>
        <div className="profile__activ_box">
          <div className="profile__head">PURCHASE HISTORY</div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
