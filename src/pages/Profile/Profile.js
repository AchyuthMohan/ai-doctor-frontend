import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./Profile.css";
import axiosInstance from "../../auth/authHandler";
import { baseUrl } from "../../utils/urls";
// import Loader from "../../components/Loader/Loader";
import MedPurchHistoryCrd from "../../components/MedPurchHistoryCrd/MedPurchHistoryCrd";
import EditProfileDialog from "../../components/EditProfileDialog/EditProfileDialog";
import { useNavigate } from "react-router";
const Profile = () => {
  // const [loading, setLoading] = useState(true);
  const today=new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth()+1).padStart(2,'0');
  const day =String(today.getDate()).padStart(2,'0');
  const currentDate = year +'-'+month+'-'+day;

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState({});
  const[purchases,setPurchases]=useState([])
  const [flag, setFlag] = useState(0);
  const { isAuthenticated, appoints, curruseremail, curruserid, currusername } =
    useContext(UserContext);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      axiosInstance.get(`${baseUrl}/user-detail/`).then(
        (response) => {
          setUsers(response.data);
          setFlag(1);
          // setLoading(false);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [isAuthenticated, curruserid, navigate]);
  useEffect(()=>{
    axiosInstance.get(`${baseUrl}/purchase-medicine/`).then((res)=>{
      setPurchases(res.data)
    })
  },[])
  useEffect(() => {
    if (flag === 1) {
      users.forEach((u) => {
        if (u.user_foreign === curruserid) {
          setUser(u);
        }
      });
    }
  }, [users, curruserid,flag]);
  return (
    <div className="profile__main_pg">
      <div className="profile__card">
        <img src={user.user_image} alt="" />
        {user ? (
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
          </div>
        ) : (
          <button>Create Profile</button>
        )}

        <EditProfileDialog
          open={open}
          handleClose={handleClose}
          userid={curruserid}
        />
      </div>

      <div className="booking__section">
        <div className="profile__activ_box">
          <div className="profile__head">APPOINTMENTS</div>

          {appoints.map((appoint,index) =>
          
           ( appoint.user_foreign === parseInt(curruserid) && currentDate<=appoint.date)? (
              <div className="apt__booked_data" key={appoint.id}>
                <span>{index+1}</span>
                <span>Dr. {appoint.name_of_doctor}</span>
                <span>{appoint.time}</span>
                <span>{appoint.date}</span>
                <span className="meet_link" onClick={()=>{
                  window.open(appoint.meet_link,"_blank")
                }}>{appoint.meet_link}</span>
              </div>
            ) : null
          )}
        </div>
        <div className="profile_prchs__history_container">
          <div className="prchs__history_heading">PURCHASE HISTORY</div>
          <div className="prchs__history_container">
            {purchases.map((purchase,index)=>{
              return(
                <MedPurchHistoryCrd key={index} medicine={purchase}/>
              )
            })}
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
