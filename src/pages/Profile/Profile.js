import React from 'react'
import './Profile.css'
const Profile = () => {
  return (
        <div className="profile__main_pg">
          <div className="profile__card">
            <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4" alt="" />
            <div className="profile__card_details_sect">
            <p>Name</p>
            <p>ID</p>
            <p>Age</p>
            <button>Edit profile</button>
            </div>
          </div>
          <div className="booking__section">
            <div className="profile__activ_box">
              <div className="profile__head">
              APPOINTMENTS
              </div>
             
              <div className="apt__booked_data">                
                <span>1.</span>
                <span>Dr. Robin</span>
                <span>10:00am</span>
                <span>12-04-2023</span>
                <span>https://meet.google.com/wer-kju-kdj</span>

              </div>
            </div>
            <div className="profile__activ_box">
              <div className="profile__head">
              PURCHASE HISTORY
              </div>
            </div>
          </div>
        </div>
  )
}
export default Profile