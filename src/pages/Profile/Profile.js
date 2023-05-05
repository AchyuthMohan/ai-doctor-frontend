import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./Profile.css";
import axiosInstance from "../../auth/authHandler";
import { baseUrl } from "../../utils/urls";
import Loader from "../../components/Loader/Loader";
import EditProfileDialog from "../../components/EditProfileDialog/EditProfileDialog";
import { useNavigate } from "react-router";
const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const { isAuthenticated, appoints, curruseremail, curruserid, currusername } =
    useContext(UserContext);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      axiosInstance.get(`${baseUrl}/user-detail/${curruserid}/`).then(
        (response) => {
          setUser(response.data);
          setLoading(false);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      navigate("/login");
    }
  }, [isAuthenticated, curruserid, navigate]);
  if (loading) {
    <Loader />;
  } else {
    return (
      <div className="profile__main_pg">
        <div className="profile__card">
          <img src={user.user_image} alt="" />
          <div className="profile__card_details_sect">
            <p>{user.actual_name}</p>
            <p>AD{curruserid}</p>
            <p>Age:{user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>username:{currusername}</p>
            <p>DOB:{user.dob}</p>
            <p>Email:{curruseremail}</p>

            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              Edit profile
            </button>
            <EditProfileDialog open={open} handleClose={handleClose} />
          </div>
        </div>
        <div className="booking__section">
          <div className="profile__activ_box">
            <div className="profile__head">APPOINTMENTS</div>

            {appoints.map((appoint) =>
              appoint.user_foreign === parseInt(curruserid) ? (
                <div className="apt__booked_data" key={appoint.id}>
                  <span>{appoint.id}</span>
                  <span>Dr. {appoint.name_of_doctor}</span>
                  <span>{appoint.time}</span>
                  <span>{appoint.date}</span>
                  <span>{appoint.meet_link}</span>
                </div>
              ) : null
            )}
          </div>
          <div className="profile__activ_box">
            <div className="profile__head">PURCHASE HISTORY</div>
          </div>
        </div>
      </div>
    );
  }
};
export default Profile;
