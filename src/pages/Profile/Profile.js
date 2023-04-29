import React, { useEffect, useState } from "react";
import "./Profile.css";
import axiosInstance from "../../auth/authHandler";
import { baseUrl } from "../../utils/urls";
import { useNavigate } from "react-router-dom";
import Editprofileform from "../../components/EditProfileDialog/Editprofileform";
import { Modal, Button } from "react-bootstrap";
const Profile = () => {
  const navigate = useNavigate();
  const [curr_username, setCurr_username] = useState("");
  const [currEmail, setCurrEmail] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [currUserid, setcurrUserid] = useState();
  const [actualname, setActualname] = useState("");
  const [userimg, setUserimg] = useState();
  const [show, setShow] = useState(false);
  const [dob, setDob] = useState();
  const [userImage, setUserImage] = useState();
  const handleClose = () => setShow(false);
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
        <img
          src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4"
          alt=""
        />
        <div className="profile__card_details_sect">
          <p>Name</p>
          <p>ID</p>
          <p>Age</p>
          <button
            onClick={() => {
              setShow(true);
            }}
          >
            Edit profile
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Editprofileform
                userDetailId={userDetailId}
                actualname={actualname}
                userimg={userimg}
                setActualname={setActualname}
                setUserimg={setUserimg}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close Button
              </Button>
            </Modal.Footer>
          </Modal>
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
